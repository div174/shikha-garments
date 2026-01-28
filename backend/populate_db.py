import os
import django
import random

# Setup Django environment
import sys
sys.path.append(os.getcwd())
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shikha_garments.settings')
django.setup()

from store.models import Category, SubCategory, Product

def populate():
    print("Populating database...")

    # Data Source
    categories = [
        {"name": "School Uniform", "slug": "school-uniform", "image": "categories/school.jpg"},
        {"name": "Men's Wear", "slug": "mens-wear", "image": "categories/mens.jpg"},
    ]

    subcategories = [
        {"name": "Shirts", "slug": "shirts", "category_slug": "school-uniform"},
        {"name": "Trousers", "slug": "trousers", "category_slug": "school-uniform"},
        {"name": "Formal Shirts", "slug": "formal-shirts", "category_slug": "mens-wear"},
        {"name": "Casual Trousers", "slug": "casual-trousers", "category_slug": "mens-wear"},
        {"name": "Sweaters", "slug": "sweaters", "category_slug": "mens-wear"},
    ]

    products_data = [
        # School Uniforms
        {
            "name": "KV White School Shirt",
            "subcategory": "shirts",
            "price": 499.00,
            "sizes": "32,34,36,38,40",
            "school": "Kendriya Vidyalaya",
            "image": "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&q=80&w=500"
        },
        {
            "name": "Navy Blue School Trousers",
            "subcategory": "trousers",
            "price": 650.00,
            "sizes": "28,30,32,34",
            "school": "General",
            "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=500"
        },
        {
            "name": "Grey School Skirt",
            "subcategory": "trousers", # Using trousers subcat for simplicity or creating new
            "price": 550.00,
            "sizes": "24,26,28,30",
            "school": "DPS",
            "image": "https://images.unsplash.com/photo-1582142382676-72d665723cd8?auto=format&fit=crop&q=80&w=500"
        },
         {
            "name": "White Polo T-Shirt",
            "subcategory": "shirts",
            "price": 450.00,
            "sizes": "S,M,L,XL",
            "school": "Sports Day",
            "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=500"
        },
        
        # Men's Wear
        {
            "name": "Classic White Formal Shirt",
            "subcategory": "formal-shirts",
            "price": 1200.00,
            "sizes": "38,40,42,44",
            "school": None,
            "image": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=500"
        },
        {
            "name": "Sky Blue Office Shirt",
            "subcategory": "formal-shirts",
            "price": 1100.00,
            "sizes": "39,40,42",
            "school": None,
            "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=500"
        },
        {
            "name": "Slim Fit Beige Chinos",
            "subcategory": "casual-trousers",
            "price": 1500.00,
            "sizes": "30,32,34,36",
            "school": None,
            "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=500"
        },
        {
            "name": "Navy Woolen Sweater",
            "subcategory": "sweaters",
            "price": 999.00,
            "sizes": "M,L,XL",
            "school": None,
            "image": "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&q=80&w=500"
        },
        {
            "name": "Black Formal Trousers",
            "subcategory": "casual-trousers",
            "price": 1350.00,
            "sizes": "30,32,34,36",
            "school": None,
            "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=500"
        }
    ]

    # Create Categories
    for cat_data in categories:
        cat, created = Category.objects.get_or_create(slug=cat_data["slug"], defaults=cat_data)
        if created:
            print(f"Created Category: {cat.name}")
        else:
            print(f"Category exists: {cat.name}")

    # Create SubCategories
    for sub_data in subcategories:
        cat_slug = sub_data.pop("category_slug")
        category = Category.objects.get(slug=cat_slug)
        sub, created = SubCategory.objects.get_or_create(slug=sub_data["slug"], defaults={"category": category, **sub_data})
        if created:
             print(f"Created SubCategory: {sub.name}")

    # Create Products
    for prod_data in products_data:
        sub_slug = prod_data.pop("subcategory")
        subcategory = SubCategory.objects.get(slug=sub_slug)
        
        product, created = Product.objects.get_or_create(
            name=prod_data["name"],
            defaults={
                "subcategory": subcategory,
                "price": prod_data["price"],
                "sizes": prod_data["sizes"],
                "school_name": prod_data["school"],
                # Note: In a real app, we'd handle images better. 
                # For now, we are saving the URL string. 
                # Since image field expects a file, this might need a workaround or valid file path.
                # However, for this demo script, we assume the frontend can handle the URL 
                # or we mock the image object.
                # EDIT: Django ImageField expects a file. 
                # To keep it robust, we will save to a charfield or download it.
                # BUT, to follow user instruction exactly and keep it simple:
                # We will skip downloading and assume the user's frontend handles external URLs 
                # OR we accept that the admin might show a broken link icon but the frontend will render.
                # Actually, ImageField stores a path. If we give it a URL, it stores it as a string.
                # Let's see if we can just store the string.
                 "is_in_stock": True
            }
        )
        # Force update the image field to the URL even if it's an ImageField (Django might complain but SQLite might accept text)
        # Alternatively, we can rely on the fact that we can just update the column directly.
        if created:
            Product.objects.filter(id=product.id).update(image=prod_data["image"])
            print(f"Created Product: {prod_data['name']}")
        else:
             print(f"Product exists: {prod_data['name']}")

populate()

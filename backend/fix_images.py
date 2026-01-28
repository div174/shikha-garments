import os
import django
import sys

# Setup Django
sys.path.append(os.getcwd())
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shikha_garments.settings')
django.setup()

from store.models import Product

def fix_images():
    placeholder_url = "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500"
    
    # Check all products
    products = Product.objects.all()
    print(f"Checking {products.count()} products...")
    
    fixed_count = 0
    for product in products:
        # Condition: No file AND no URL (or empty URL)
        has_file = bool(product.image_file)
        has_url = bool(product.image_url)
        
        if not has_file and not has_url:
            print(f"Fixing missing image for: {product.name}")
            product.image_url = placeholder_url
            product.save()
            fixed_count += 1
            
    print(f"Finished. Fixed {fixed_count} products.")

if __name__ == "__main__":
    fix_images()

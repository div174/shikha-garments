from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    image = models.ImageField(upload_to='categories/', blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Categories'

class SubCategory(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='subcategories')
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return f"{self.category.name} - {self.name}"

    class Meta:
        verbose_name_plural = 'Sub Categories'

class Product(models.Model):
    name = models.CharField(max_length=255)
    subcategory = models.ForeignKey(SubCategory, on_delete=models.CASCADE, related_name='products')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.CharField(max_length=500, blank=True, null=True, help_text="URL of the product image")
    # Storing sizes as a comma-separated string for simplicity in this version, 
    # or could use JSONField if DB supports it (SQLite does in modern Django).
    # Using CharField for broad compatibility.
    sizes = models.CharField(max_length=255, help_text="Comma-separated sizes, e.g. S,M,L or 32,34")
    school_name = models.CharField(max_length=255, blank=True, null=True, help_text="Specific school name for uniforms")
    is_in_stock = models.BooleanField(default=True)

    def __str__(self):
        return self.name

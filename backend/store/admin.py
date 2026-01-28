from django.contrib import admin
from django.utils.html import format_html
from .models import Category, SubCategory, Product

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    prepopulated_fields = {'slug': ('name',)}

@admin.register(SubCategory)
class SubCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'slug')
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'subcategory', 'price', 'school_name', 'is_in_stock', 'image_preview')
    list_filter = ('subcategory', 'school_name', 'is_in_stock')
    search_fields = ('name', 'subcategory__name', 'school_name')
    list_editable = ('price', 'is_in_stock')
    
    def image_preview(self, obj):
        if obj.image:
             return format_html('<img src="{}" style="width: 50px; height: 50px; object-fit: cover;" />', obj.image)
        return "No Image"
    image_preview.short_description = 'Image'

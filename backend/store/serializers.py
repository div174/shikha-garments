from rest_framework import serializers
from .models import Category, SubCategory, Product

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class SubCategorySerializer(serializers.ModelSerializer):
    category_name = serializers.ReadOnlyField(source='category.name')

    class Meta:
        model = SubCategory
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    subcategory_name = serializers.ReadOnlyField(source='subcategory.name')
    category_name = serializers.ReadOnlyField(source='subcategory.category.name')

    class Meta:
        model = Product
        fields = '__all__'

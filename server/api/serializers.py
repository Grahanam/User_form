from rest_framework.serializers import ModelSerializer
from rest_framework import fields

from .models import Profile
    

class ProfileSerializer(ModelSerializer):
    #  date = fields.DateField(input_formats=['%Y-%m-%d'])
     class Meta:
        model=Profile
        # fields=('id','name','email','date','number')
        fields='__all__'

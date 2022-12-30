from django.db import models
import uuid
# Create your models here.

class Profile(models.Model):
    id=models.UUIDField(primary_key=True, default=uuid.uuid4)
    name=models.CharField(max_length=100 ,null=True,blank=True)
    # date=models.CharField(max_length=100 ,null=True,blank=True)
    date=models.DateTimeField(auto_now_add=False,auto_now=False,blank=True,null=True)
    email=models.EmailField(max_length=100,null=True,blank=True)
    number=models.CharField(max_length=15,blank=True,null=True)
    
    def __str__(self):
        return self.name


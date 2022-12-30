from django.urls import path
from . import views


urlpatterns=[
    path('',views.getRoutes),
    path('get/',views.getData),
    path('post/',views.saveData),
]
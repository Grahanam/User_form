from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .models import Profile
from .serializers import ProfileSerializer


# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes=[
        '/api/get',
        '/api/post'
    ]
    return Response(routes)

@api_view(['POST'])
def saveData(request):
    data=request.data
    number=request.data.get('number')
    profile_filter=Profile.objects.filter(number=number).first()
    if profile_filter==None:
        serializer=ProfileSerializer(data=request.data)
        if serializer.is_valid():
           serializer.save()
          
        return Response(serializer.data)
        
    else:
        return Response('Mobile number already present',status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getData(request):
    profile=Profile.objects.all()
    serializer=ProfileSerializer(profile,many=True)
    return Response(serializer.data)






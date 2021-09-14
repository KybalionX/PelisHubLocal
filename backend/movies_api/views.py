
from django.http import response, JsonResponse
from django.shortcuts import render
from rest_framework.views import APIView, Response
from movies_api.models import Usuario
from django.core import serializers
import requests 
import json

# Create your views here.
class HelloApiView(APIView):

    def get(self, request, format=None):
        return Response({'Testing': 'Just a test from this API'})       


class SearchMovie(APIView):
    def get(self, request):
        search = request.query_params["search"]
        response = requests.get("https://api.themoviedb.org/3/search/multi?api_key=c3519dc03ba1de5a4c499a0b89386039&language=es&query="+search)
        data = response.json()
        
        return Response({'search': search , 'data_movie': data})

class GetMovie(APIView):
    def get(self, request,id=None, *args, **kwargs):
        id = request.query_params['id']
        response = requests.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=c3519dc03ba1de5a4c499a0b89386039&language=es")
        return Response({'search': response.json()
        })

class MoviePopular(APIView):
    def get(self, request):
        response = requests.get("https://api.themoviedb.org/3/movie/popular?api_key=c3519dc03ba1de5a4c499a0b89386039&language=es&page=1")
        data = response.json()
        for item in data['results']:
            item['enlacePoster'] = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+item['poster_path']
        return Response({"data": data})

class Trending(APIView):
    def get(self, request):
        type = request.GET.get('type')
        response = any
        if type == "day":
            response = requests.get("https://api.themoviedb.org/3/trending/movie/day?api_key=c3519dc03ba1de5a4c499a0b89386039&language=es")
        elif type == "week":
            response = requests.get("https://api.themoviedb.org/3/trending/movie/week?api_key=c3519dc03ba1de5a4c499a0b89386039&language=es")
        data = response.json();        

        for item in data['results']:
            item['enlacePoster'] = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+item['poster_path']
        
        return Response({"data": data})

class Proximo(APIView):
    def get(self, request):
        page = request.GET.get('page')
        response = requests.get("https://api.themoviedb.org/3/movie/upcoming?api_key=c3519dc03ba1de5a4c499a0b89386039&language=es&page="+page)
        data = response.json()
        for item in data['results']:
            if item['poster_path'] is None:
                print("None encontrado")
                item['enlacePoster'] = "assets/resources/NoPoster.png"
            else:
                item['enlacePoster'] = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+str(item['poster_path'])
        return Response({"data": data})

        
class Users(APIView):
    def get(self, request,id=None, *args, **kwargs):
        return Response({'usuarios': Usuario.objects.values()})
    def post(self, request):
        print("Hiadica")




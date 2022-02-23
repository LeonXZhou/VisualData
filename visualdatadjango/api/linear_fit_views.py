from django.shortcuts import render
from django.http import JsonResponse
import json
# Create your views here.


def test(request):
    print('iran')
    print(request.method)
    if request.method == 'POST':
        return JsonResponse({'bob': 'wooooooop'})
    data = {
        'name': 'Vitor',
        'location': 'Finland',
        'is_active': True,
        'count': 28
    }
    return JsonResponse(data)


def linear(request):
    print(json.loads(request.body))
    data = {
        'name': 'Vitor',
        'location': 'Finland',
        'is_active': True,
        'count': 28
    }
    return JsonResponse(data)

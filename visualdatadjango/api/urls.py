from django.urls import path
from django.http import JsonResponse

from . import views

def test(request):
    print('iran')
    print(request.method)
    if request.method == 'POST':
        return JsonResponse({'bob':'wooooooop'})
    data = {
        'name': 'Vitor',
        'location': 'Finland',
        'is_active': True,
        'count': 28
    }
    return JsonResponse(data)

urlpatterns = [
    path('', test),
]
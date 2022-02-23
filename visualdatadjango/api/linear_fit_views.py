from django.shortcuts import render
from django.http import JsonResponse
import json
from scipy.stats import linregress
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
    request_data = json.loads(request.body)
    xdata = []
    ydata = []
    for xVal in request_data['xVals']:
        xdata.append(float(xVal))
    for yVal in request_data['yVals']:
        ydata.append(float(yVal))

    slope, intercept, r, p, se = linregress(xdata, ydata)

    return JsonResponse({'slope': slope, 'intercept': intercept, 'r': r, 'p': p, 'se': se})

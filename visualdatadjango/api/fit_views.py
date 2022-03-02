from django.shortcuts import render
from django.http import JsonResponse
import json
from scipy.stats import linregress
import numpy as np
# Create your views here.



def linear(request):
    request_data = json.loads(request.body)

    if len(request_data['xVals']) == 0:
        return JsonResponse({'data': []})

    xdata = []
    ydata = []

    for xVal in request_data['xVals']:
        xdata.append(float(xVal))
    for yVal in request_data['yVals']:
        ydata.append(float(yVal))

    results = linregress(xdata, ydata)

    xRange = np.amax(xdata) - np.amin(xdata)
    xStart = np.amin(xdata) - xRange * .1
    xEnd = np.amax(xdata) + xRange * .1
    xSteps = int(xRange/0.1)

    xVals = np.linspace(xStart, xEnd, xSteps)
    yVals = xVals * results.slope + results.intercept

    lineData = []
    for i in range(len(xVals)):
        lineData.append({'x': xVals[i], 'y': yVals[i]})

    return JsonResponse({'data': lineData,
                         'slopeIntercept': {
                             'slope': round(results.slope, 3),
                             'intercept': round(results.intercept, 3),
                             'slopeErr': round(results.stderr, 3),
                             'interceptErr': round(results.intercept_stderr, 3)
                         }})


def quadratic(request):
    request_data = json.loads(request.body)

    if len(request_data['xVals']) == 0:
        return JsonResponse({'data': []})

    xdata = []
    ydata = []

    for xVal in request_data['xVals']:
        xdata.append(float(xVal))
    for yVal in request_data['yVals']:
        ydata.append(float(yVal))



    polynomialCoef = np.polyfit(xdata,ydata,2);

    

    xRange = np.amax(xdata) - np.amin(xdata)
    xStart = np.amin(xdata) - xRange * .1
    xEnd = np.amax(xdata) + xRange * .1
    xSteps = int(xRange/0.1)

    xVals = np.linspace(xStart, xEnd, xSteps)

    yVals = np.polyval(polynomialCoef,xVals)
    # yVals = xVals * results.slope + results.intercept

    quadraticData = []
    for i in range(len(xVals)):
        quadraticData.append({'x': xVals[i], 'y': yVals[i]})

    return JsonResponse({'data': quadraticData})


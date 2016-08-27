#!/usr/bin/python
print "Content-Type: text/html\n"
print ""

from yelp.client import Client
from yelp.oauth1_authenticator import Oauth1Authenticator
import json
import cgi


def getQuery():
    d = {}
    formData = cgi.FieldStorage()
    for k in formData.keys():
        d[k] = formData[k].value
    return d

queryStuff = getQuery()


auth = Oauth1Authenticator(
    consumer_key='TsOpjiTSWh1N04l8r9iVyA',
    consumer_secret='hsLu_L9i__qTLtZtFyh1MZRg9Mc',
    token='yYee-GGqriUEKE2hnQ-kVMHdctqtRenq',
    token_secret='lCBKW_nnyqu440NaKh8VS6ur4HY'
)

client = Client(auth)

params = {
    'term' : 'pizza',
}

def readBuisnesses():
    response = client.search('Brooklyn, NY 11209', **params)
    for i in response.businesses:
        print i.name
        print i.url
        print ""
readBuisnesses()



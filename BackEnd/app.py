from flask import Flask
from flask import request
import json

import modules.website_analysis as wa


app = Flask(__name__)


@app.route('/')
def home():
    try:
        print("initiating scan")
        st="https://saket-upadhyay.github.io/"
        Spider_Object=wa.Spider(st)
        print("crawl initiated")
        raw=Spider_Object.crawl()
        print("crawl over")
        report=json.loads(json.dumps(raw,indent=4,separators=(',',': ')))

        return report
    except:
        return "Error"

@app.route('/scan', methods=["GET","POST"])
def scan():
    if request.method == "POST":
        try:
            site=request.form.get('site')
            print("Scanning "+str(site))
            Spider_Object=wa.Spider(site)
            print("Initiating Crawl")
            raw_report=Spider_Object.crawl()
            print("Crawl Over")
            print("Sending response")
            report=json.loads(json.dumps(raw_report,indent=4,separators=(',',': ')))
            return report
        except:
            return "Internal Error in processing"
    elif request.method == "GET":
        try:
            site=request.args.get('site')
            print("Scanning "+str(site))
            Spider_Object=wa.Spider(site)
            print("Initiating Crawl")
            raw_report=Spider_Object.crawl()
            print("Crawl Over")
            print("Sending response")
            report=json.loads(json.dumps(raw_report,indent=4,separators=(',',': ')))
            return report
        except:
            return "Internal Error in processing"
    else:
        return "ERROR: API accepts POST or GET requests only."


if __name__ == '__main__':
    app.run()

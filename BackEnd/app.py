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

@app.route('/scan', methods=["POST"])
def scan():
    if request.method == "POST":
        try:
            site=request.get_json()['site']
            Spider_Object=wa.Spider(site)
            raw_report=Spider_Object.crawl()
            report=json.loads(json.dumps(raw_report,indent=4,separators=(',',': ')))
            return report
        except:
            return "ERROR: API accepts POST requests only."


if __name__ == '__main__':
    app.run()

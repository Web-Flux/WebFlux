from flask import Flask
from flask import request
import json

import modules.website_analysis as wa

app = Flask(__name__)


def calc_score(data):
    page_achievement = data['pages']
    page_achievement = page_achievement[0]
    page_achievement = page_achievement['achieved']
    page_achievement = len(page_achievement)
    site_achievement = data['site']
    site_achievement = site_achievement['achieved']
    site_achievement = len(site_achievement)
    total_achievement = page_achievement + site_achievement
    page_issues = data['pages']
    page_issues = page_issues[0]
    page_issues = page_issues['issues']
    page_issues = len(page_issues)
    site_issues = data['site']
    site_issues = site_issues['issues']
    site_issues = len(site_issues)
    total_issues = page_issues + site_issues
    max_score = total_issues + total_achievement

    return site_achievement, page_achievement, site_issues, page_issues, total_achievement, total_issues, max_score


@app.route('/')
def home():
    try:
        print("initiating scan")
        st = "https://saket-upadhyay.github.io/"
        Spider_Object = wa.Spider(st)
        print("crawl initiated")
        raw = Spider_Object.crawl()
        print("crawl over")
        report = json.loads(json.dumps(raw, indent=4, separators=(',', ': ')))

        data = report

        site_achievement, page_achievement, site_issues, page_issues, total_achievement, total_issues, max_score = calc_score(data)
        result = {'scored': total_achievement, 'max_score': max_score}

        report.update(result)

        return report
    except:
        return "Error"


@app.route('/scan', methods=["GET", "POST"])
def scan():
    if request.method == "POST":
        try:
            site = request.form.get('site')
            print("Scanning " + str(site))
            Spider_Object = wa.Spider(site)
            print("Initiating Crawl")
            raw_report = Spider_Object.crawl()
            print("Crawl Over")
            print("Sending response")
            report = json.loads(json.dumps(raw_report, indent=4, separators=(',', ': ')))
            data = report
            site_achievement, page_achievement, site_issues, page_issues, total_achievement, total_issues, max_score = calc_score(
                data)
            result = {'scored': total_achievement, 'max_score': max_score}

            report.update(result)

            return report

        except:
            return "Internal Error in processing"
    elif request.method == "GET":
        try:
            site = request.args.get('site')
            print("Scanning " + str(site))
            Spider_Object = wa.Spider(site)
            print("Initiating Crawl")
            raw_report = Spider_Object.crawl()
            print("Crawl Over")
            print("Sending response")
            report = json.loads(json.dumps(raw_report, indent=4, separators=(',', ': ')))
            data = report

            site_achievement, page_achievement, site_issues, page_issues, total_achievement, total_issues, max_score = calc_score(
                data)
            result = {'scored': total_achievement, 'max_score': max_score}

            report.update(result)

            return report
        except:
            return "Internal Error in processing"
    else:
        return "ERROR: API accepts POST or GET requests only."


if __name__ == '__main__':
    app.run()

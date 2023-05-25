import requests
import re
import json
import yaml
import sys

res = requests.get('https://developer.atlassian.com/cloud/trello/rest/api-group-actions/')


def get_script_tag(html: str):
    scriptTags = re.findall("<script.*>.*window.*</script>", res.text)
    if (len(scriptTags) > 0):
        print(str(len(scriptTags)) + " Match for regex filter")
    else:
        print("no matches found, exiting")
        sys.exit(1)
    return scriptTags[0]


dataJson = json.loads(re.search("{.*}", get_script_tag(res.text)).group())
schemas = dataJson['schema']

# with open('trello-schema.json', 'w', encoding='utf-8') as fjson:
#     json.dump(schemas, fjson,  ensure_ascii=False, indent=2)


print(yaml.dump(schemas, sort_keys=False))
with open('trello-schema.yaml.new','w') as fyaml:
    yaml.dump(schemas, fyaml, sort_keys=False)



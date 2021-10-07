#!/usr/bin/env python

import subprocess
import json

def load_skills(file_path='competence_skills.md'):
    """  load the md file and convert it into a json file """
    print('Loading skills file from ' + file_path)
    a = subprocess.check_output(['md_to_json', file_path]).decode('utf-8')
    b = a.replace('\r', '')
    c = b.replace('\n', '')
    return json.loads(c)

def load_menu(file_path='../data/menu.json'):
    """ load the menu file into dict2 """
    print('Opening menu structure...')
    with open(file_path) as f:
        return json.loads(f.read().replace('\n', ''))
    
def save_to_json(skills, file_path='../data/skills.json'):
    """ convert the output to json and save """
    print('Saving into a JSON file under path ' + file_path)
    with open(file_path, 'w') as f:
        json_string = json.dumps(skills)
        json_string = json_string.replace('\n', '')
        f.write(json_string)

def get_new_menu(menu):
    """  extract all keys into a new dictionary (name/key) """
    new_menu = dict()
    for group in menu:
        for key1, _ in menu[group]['subgroups'].items():
            for skill in menu[group]['subgroups'][key1]['skills']:
                new_menu[skill['name']] = skill['key']
    return new_menu

def replace_key(skills, new_menu):
    """ Replace the keys from dict1 from keys of dict2 """
    for k, v in new_menu.items():
        new_key = v
        skills[new_key] = skills.pop(k)
    return skills


def main():
    skills = load_skills('\\\\brsafs01\\chassis2$\\Engineering\\Automation\\_Organization\\competence_skills.md')
    menu = load_menu()
    new_menu = get_new_menu(menu)
    renamed_skills = replace_key(skills, new_menu)
    save_to_json(renamed_skills)    
    print('\nConversion process is done!')

if __name__ == '__main__':
    main()



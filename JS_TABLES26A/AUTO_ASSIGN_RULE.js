// AUTO_ASSIGN_RULE.js

window.AUTO_ASSIGN_RULE = {
  "tables": {
    "AUTO_ASSIGN_RULE": {
      "description": "Header information for the auto-assign rule",
      "columns": {
        "AUTO_ASSIGN_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Auto_assign rule id"
},
        "AUTO_ASSIGN_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "AUTO_ASSIGN_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "AUTO_ASSIGN_TYPE",
          "info": "Type of auto-assignment done by the rule"
},
        "RULE_SEQUENCE": {
          "type": "NUMBER(8)",
          "nullable": false,
          "info": "Sequence that rule should be run; managed only by an admin user.  Necessary for a rule assignment that may be dependent on values assigned by another rule."
},
        "PQ_AUTO_ASSIGN_CRITERIA_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "AUTO_ASSIGN_CRITERIA",
          "info": "Optional pre-qualifier criteria to check if rule should even be considered"
},
        "PQ_AUTO_ASSIGN_LIST_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "If pre-qualify criteria is used, indicates how to process list: O=match one in list, N=match none in list"
},
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates if rule is active"
},
        "IS_STOP_AFTER_1ST_ASSIGN": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates if assign engine shoule stop assigning after an assignment is made or if it should continue testing all conditions."
},
        "IS_PQ_MATCH_ALL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If Y, indicates all values from the business object must pass the rule check. N indicates any match passes the rule."
},
        "CATEGORY": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Optional user classification or id for the rule"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Optional user description for the rule"
},
        "IS_ON_CREATE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
}
      },
      "fk_tables": [
        "AUTO_ASSIGN_RULE_CRITERIA",
        "AUTO_ASSIGN_RULE_DEFINITION",
        "AUTO_ASSIGN_RULE_EVENT",
        "AUTO_ASSIGN_RULE_PRE_QUAL_LIST",
        "DOCUMENT_DEF_CHECK"
]
    }
  }
};
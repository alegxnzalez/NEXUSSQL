// GTM_RULE_GROUP_SET_JOIN.js

window.GTM_RULE_GROUP_SET_JOIN = {
  "tables": {
    "GTM_RULE_GROUP_SET_JOIN": {
      "columns": {
        "GTM_COMPLIANCE_RULE_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_COMPLIANCE_RULE_GROUP"
},
        "GTM_COMPLIANCE_RULE_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_COMPLIANCE_RULE_SET"
},
        "SEQ_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "LICENSE_OVERRIDE_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "values": [
                    "ALLOWED",
                    "NOT_ALLOWED",
                    "LAST"
          ]
},
        "EXCEPTION_OVERRIDE_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "values": [
                    "ALLOWED",
                    "NOT_ALLOWED",
                    "LAST"
          ]
},
        "IS_EXCEPTION_RESTRICTION": {
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
      "fk_tables": []
    }
  }
};
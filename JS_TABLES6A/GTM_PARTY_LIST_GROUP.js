// GTM_PARTY_LIST_GROUP.js

window.GTM_PARTY_LIST_GROUP = {
  "tables": {
    "GTM_PARTY_LIST_GROUP": {
      "columns": {
        "GTM_PARTY_LIST_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "GTM_PARTY_LIST_GROUP_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(2000)",
          "nullable": true
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
        "GTM_COMPLIANCE_RULE",
        "GTM_PARTY_LIST_GROUP_D"
      ]
    }
  }
};

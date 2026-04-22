// ACTION_DEF.js

window.ACTION_DEF = {
  "tables": {
    "ACTION_DEF": {
      "columns": {
        "ACTION_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "ACTION_DEF_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "QUERY_TABLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "QUERY_TABLE"
        },
        "IS_ASSIGNABLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "SUPPORT_IGNORE_CRITERIA": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "ACTION_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "C",
            "R",
            "I"
          ],
          "info": "Type of action, 'C' Collective, 'R' Recursive, 'I' Independent or NULL"
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
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": [
        "ACTION",
        "ACTION_DEF_ARG",
        "ACTION_DEF_SEL_PARAM",
        "ACTION_DEF_STATE"
      ]
    }
  }
};

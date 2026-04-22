// LNM_DATARULE_DEF.js

window.LNM_DATARULE_DEF = {
  "tables": {
    "LNM_DATARULE_DEF": {
      "columns": {
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
        "DATARULE_DEFINITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The global identifier for lnm_data_rule_def. "
        },
        "DATARULE_DEFINITION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The xid column for the lnm_data_rule_def. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "RULE_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "values": [
            "COLUMNS",
            "JAVA"
          ],
          "info": "Type of rule. Allowed values are COLUMNS and JAVA. "
        },
        "TABLE_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Name of impacted table. "
        },
        "JAVA_PLUGIN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Java plugin implementing the data rule interface. It must be of type LNM_DATARULE_DEF. "
        },
        "RULE_GROUP": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "Usability grouping for data rule."
        },
        "INCLUDE_ALL_COLUMNS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        }
      },
      "fk_tables": [
        "LNM_DATARULE_INSTANCE",
        "LNM_DATARULE_PARAM"
      ]
    }
  }
};

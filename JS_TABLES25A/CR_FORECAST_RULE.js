// CR_FORECAST_RULE.js

window.CR_FORECAST_RULE = {
  "tables": {
    "CR_FORECAST_RULE": {
      "columns": {
        "CR_FORECAST_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "CR_FORECAST_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "UI Label for the rule. "
        },
        "JAVA_CLASS": {
          "type": "VARCHAR2(200)",
          "nullable": false,
          "info": "Java class implementing the rule."
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
        "CR_PROJECT"
      ]
    }
  }
};

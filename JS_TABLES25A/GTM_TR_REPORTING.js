// GTM_TR_REPORTING.js

window.GTM_TR_REPORTING = {
  "tables": {
    "GTM_TR_REPORTING": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update. "
        },
        "GTM_TR_REPORTING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the reporting results assigned to the GTM trade transaction line. "
        },
        "GTM_TR_REPORTING_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the reporting results assigned to the GTM trade transaction line. "
        },
        "GTM_TRANSACTION_LINE_GID": {
          "type": "VARCHAR2(201)",
          "nullable": false,
          "foreign_key": "GTM_TRANSACTION_LINE",
          "info": "The GID for the GTM trade transaction. "
        },
        "GTM_COMPLIANCE_RULE_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_COMPLIANCE_RULE_GROUP",
          "info": "The GID for the compliance rule set group used to assign the reporting results to the GTM trade transaction line. "
        },
        "GTM_COMPLIANCE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_COMPLIANCE_RULE",
          "info": "The GID for the compliance rule used to assign the reporting results to the GTM trade transaction line. "
        },
        "GTM_REGIME_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_REGIME",
          "info": "The GID for the regime associated with the reporting results control assigned to the GTM trade transaction line. "
        },
        "GTM_CONTROL_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_CONTROL_CODE",
          "info": "The GID for the control type assigned in the reporting results of the GTM trade transaction line. "
        },
        "GTM_CONTROL_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_CONTROL_CODE",
          "info": "The control code assigned in the reporting results of the GTM trade transaction line. "
        },
        "GTM_EXCEPTION_CONTROL_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONTROL_CODE",
          "info": "The GID for the exception control type assigned in the reporting results of the GTM trade transaction line. "
        },
        "GTM_EXCEPTION_CONTROL_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONTROL_CODE",
          "info": "The exception control code assigned in the reporting results of the GTM trade transaction line. "
        },
        "EXCEPTION_COMPLIANCE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_COMPLIANCE_RULE",
          "info": "The GID for the exception compliance rule used to assign the reporting results to the GTM trade transaction line."
        }
      },
      "fk_tables": []
    }
  }
};

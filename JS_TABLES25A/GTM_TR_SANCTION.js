// GTM_TR_SANCTION.js

window.GTM_TR_SANCTION = {
  "tables": {
    "GTM_TR_SANCTION": {
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
        "GTM_TR_SANCTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for sanction assigned to the GTM trade transaction line. "
        },
        "GTM_COMPLIANCE_RULE_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_COMPLIANCE_RULE_GROUP",
          "info": "The GID for compliance rule set group used to assign the sanction to the GTM trade transaction. "
        },
        "GTM_COMPLIANCE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_COMPLIANCE_RULE",
          "info": "The GID for compliance rule used to assign the sanction to the GTM trade transaction. "
        },
        "GTM_CONTROL_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_CONTROL_CODE",
          "info": "The GID for the sanction control type assigned to the GTM trade transaction. "
        },
        "CONTROL_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_CONTROL_CODE",
          "info": "The sanction control code assigned to the GTM trade transaction. "
        },
        "GTM_TRANSACTION_LINE_GID": {
          "type": "VARCHAR2(201)",
          "nullable": false,
          "foreign_key": "GTM_TRANSACTION_LINE",
          "info": "The GID for sanction assigned to the GTM trade transaction line. "
        },
        "GTM_TR_SANCTION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the sanction assigned to the GTM trade transaction. "
        },
        "AUTHORIZATION_TEXT": {
          "type": "VARCHAR2(255)",
          "nullable": true,
          "info": "The authorization used to override a sanction assigned to the GTM trade transaction line. "
        },
        "AUTHORIZATION_ADDED_BY": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user who added the authorization used to override a sanction. "
        },
        "AUTHORIZATION_ADDED_ON": {
          "type": "DATE",
          "nullable": true,
          "info": "The date on which an authorization is added to the sanction."
        }
      },
      "fk_tables": []
    }
  }
};

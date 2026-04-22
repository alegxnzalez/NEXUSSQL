// GTM_TRANSACTION_POLICY.js

window.GTM_TRANSACTION_POLICY = {
  "tables": {
    "GTM_TRANSACTION_POLICY": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
},
        "GTM_TRANSACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRANSACTION",
          "info": "The GID for the GTM trade transaction."
},
        "GTM_POLICY_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_POLICY_QUALIFIER",
          "info": "The GID for the GTM policy qualifier."
},
        "GTM_COMPLIANCE_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_COMPLIANCE_TEMPLATE",
          "info": "The GID for the GTM compliance template."
},
        "GTM_COMPLIANCE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_COMPLIANCE_RULE",
          "info": "The GID for the GTM compliance rule."
},
        "GTM_COMPLIANCE_RULE_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_COMPLIANCE_RULE_GROUP",
          "info": "The GID for the GTM compliance rule set group."
}
      },
      "fk_tables": []
    }
  }
};
// GTM_COMPLIANCE_RULE_GROUP.js

window.GTM_COMPLIANCE_RULE_GROUP = {
  "tables": {
    "GTM_COMPLIANCE_RULE_GROUP": {
      "columns": {
        "GTM_COMPLIANCE_RULE_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "GTM_COMPLIANCE_RULE_GROUP_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "GTM_COMPLIANCE_ALGORITHM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_COMPLIANCE_ALGORITHM"
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
        "GTM_TYPE_CODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_TYPE_CODE_PROFILE",
          "info": "User Defined Type code Profile Id"
        }
      },
      "fk_tables": [
        "GTM_CONTACT_ST_SCREEN",
        "GTM_RULE_GROUP_SET_JOIN",
        "GTM_TRANSACTION_POLICY",
        "GTM_TRANSACTION_REQDOC",
        "GTM_TRANSACTION_VALUE",
        "GTM_TRANS_LINE_REQDOC_LINK",
        "GTM_TRANS_LINE_TEXT_LINK",
        "GTM_TRANS_LINE_VALUE",
        "GTM_TRANS_REQD_TEXT",
        "GTM_TR_BASE_AMOUNT",
        "GTM_TR_CONTROL_SCREEN",
        "GTM_TR_OTHER_CONTROL",
        "GTM_TR_REPORTING",
        "GTM_TR_SANCTION",
        "GTM_TR_STRUC_MATCH_RULE_DETAIL"
      ]
    }
  }
};

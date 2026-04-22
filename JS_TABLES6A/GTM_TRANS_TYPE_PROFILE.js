// GTM_TRANS_TYPE_PROFILE.js

window.GTM_TRANS_TYPE_PROFILE = {
  "tables": {
    "GTM_TRANS_TYPE_PROFILE": {
      "columns": {
        "GTM_TRANS_TYPE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Transaction Type Profile GID "
        },
        "GTM_TRANS_TYPE_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Transaction Type Profile ID "
        },
        "PROFILE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Transaction Type Profile Name "
        },
        "IS_COMPATIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Is Transaction Type Profile Compatible"
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
        "GTM_TRANS_TYPE_PROFILE_D"
      ]
    }
  }
};

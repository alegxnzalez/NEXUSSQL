// SERVPROV_BOV.js

window.SERVPROV_BOV = {
  "tables": {
    "SERVPROV_BOV": {
      "columns": {
        "SERVPROV_XID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "SCAC_CODE": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "TENDER_RESPONSE_TIME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TENDER_RESPONSE_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "TENDER_RESPONSE_TIME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "MATCH_RULE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "AUTO_PAYMENT_FLAG": {
          "type": "CHAR(1)",
          "nullable": false
        },
        "AUTO_APPROVE_RULE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "ALLOCATION_RULE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Domain of the User. Is used for creating the GID."
        }
      },
      "fk_tables": []
    }
  }
};

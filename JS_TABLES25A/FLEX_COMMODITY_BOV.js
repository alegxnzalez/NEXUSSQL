// FLEX_COMMODITY_BOV.js

window.FLEX_COMMODITY_BOV = {
  "tables": {
    "FLEX_COMMODITY_BOV": {
      "columns": {
        "FLEX_COMMODITY_PROFILE_D_ID": {
          "type": "NUMBER(10)",
          "nullable": false
        },
        "FLEX_COMMODITY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "COMMODITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "NMFC_CLASS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "NMFC_CLASS_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "NMFC_CLASS_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "STCC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "STCC_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "STCC_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "IS_49_CODE": {
          "type": "CHAR(1)",
          "nullable": false
        },
        "HTS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "SITC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "USER_DEFINED_COMMODITY_GID": {
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

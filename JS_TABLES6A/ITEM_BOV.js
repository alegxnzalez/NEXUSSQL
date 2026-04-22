// ITEM_BOV.js

window.ITEM_BOV = {
  "tables": {
    "ITEM_BOV": {
      "columns": {
        "ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "ITEM_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "ITEM_NAME": {
          "type": "VARCHAR2(240)",
          "nullable": true
        },
        "COMMODITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "COMMODITY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "COMMODITY_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "NMFC_ARTICLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "NMFC_ARTICLE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "NMFC_ARTICLE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "NMFC_CLASS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "NMFC_CLASS_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true
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
          "nullable": true
        },
        "STCC_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "HTS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "HTS_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "HTS_NAME": {
          "type": "VARCHAR2(250)",
          "nullable": true
        },
        "SITC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "SITC_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "SITC_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(255)",
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

// NMFC_ARTICLE_CLASS_MAP.js

window.NMFC_ARTICLE_CLASS_MAP = {
  "tables": {
    "NMFC_ARTICLE_CLASS_MAP": {
      "columns": {
        "NMFC_ARTICLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "NMFC_ARTICLE",
          "info": "NMFC_ARTICLE_GID contains the unique identifier for the National Motor Freight Classification (NMFC) article for the item being shipped. "
        },
        "NMFC_CLASS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "NMFC_CLASS",
          "info": "NMFC_CLASS_GID contains the unique identifier for the National Motor Freight Classification (NMFC) class for the item being shipped."
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
      "fk_tables": []
    }
  }
};

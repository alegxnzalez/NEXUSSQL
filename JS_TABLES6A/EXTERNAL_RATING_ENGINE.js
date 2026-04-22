// EXTERNAL_RATING_ENGINE.js

window.EXTERNAL_RATING_ENGINE = {
  "tables": {
    "EXTERNAL_RATING_ENGINE": {
      "columns": {
        "EXTERNAL_RATING_ENGINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "EXTERNAL_RATING_ENGINE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
        },
        "EXTERNAL_RATING_ENGINE_DESC": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "JAVA_CLASS": {
          "type": "VARCHAR2(120)",
          "nullable": false
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
        "ACCESSORIAL_COST",
        "EXT_RE_FIELDSET",
        "RATE_GEO_COST",
        "RATE_OFFERING"
      ]
    }
  }
};

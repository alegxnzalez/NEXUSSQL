// GTM_CLASS_CODE_MAPPING.js

window.GTM_CLASS_CODE_MAPPING = {
  "tables": {
    "GTM_CLASS_CODE_MAPPING": {
      "columns": {
        "GTM_CLASS_CODE_MAPPING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "GTM_CLASS_CODE_MAPPING_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "SOURCE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_PROD_CLASS_TYPE"
        },
        "SOURCE_CODE": {
          "type": "VARCHAR2(30)",
          "nullable": false
        },
        "TARGET_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PROD_CLASS_TYPE"
        },
        "TARGET_CODE": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "INSTANCE_COUNT": {
          "type": "NUMBER(8)",
          "nullable": true
        },
        "GTM_DATA_VERSION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_DATA_VERSION"
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

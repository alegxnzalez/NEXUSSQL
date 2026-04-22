// GTM_DT_CONFIG_ATTRIBUTE.js

window.GTM_DT_CONFIG_ATTRIBUTE = {
  "tables": {
    "GTM_DT_CONFIG_ATTRIBUTE": {
      "columns": {
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
        "GTM_DT_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_DT_CONFIG",
          "info": "gtm_dt_config_gid contains unique identifier for data transfer configuration "
        },
        "GTM_DT_ATTRIBUTE_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_DT_ATTRIBUTE_DEF",
          "info": "gtm_dt_attribute_def_gid contains unique identifier for data transfer attribute "
        },
        "SEQUENCE_NUMBER": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "This stores the sequence number entered by the user for each attribute in UI"
        }
      },
      "fk_tables": [
        "GTM_DT_CONFIG_ATTRIBUTE_D"
      ]
    }
  }
};

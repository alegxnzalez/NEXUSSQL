// GTM_DT_CONFIG_ATTRIBUTE_D.js

window.GTM_DT_CONFIG_ATTRIBUTE_D = {
  "tables": {
    "GTM_DT_CONFIG_ATTRIBUTE_D": {
      "description": "This table holds the values for the source and target value for the attributes to be copied.",
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
          "foreign_key": "GTM_DT_CONFIG_ATTRIBUTE",
          "info": "gtm_dt_config_gid contains unique identifier for data transfer configuration"
},
        "GTM_DT_ATTRIBUTE_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_DT_CONFIG_ATTRIBUTE",
          "info": "gtm_dt_attribute_def_gid contains unique identifier for data transfer attribute"
},
        "SEQUENCE_NUMBER": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Sequence Number to be generated that is a part of primary key"
},
        "SOURCE_VALUE1": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "This stores the qualifier value that needs to be copied from to ther target qualifier"
},
        "SOURCE_VALUE2": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "This stores the qualifier value that needs to be copied from to ther target qualifier"
},
        "TARGET_VALUE1": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "This field stores the target qualifer value to which the source qualifier value should be copied to."
},
        "TARGET_VALUE2": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "This field stores the target qualifer value to which the source qualifier value should be copied to."
},
        "DT_PARAM": {
          "type": "VARCHAR2(256)",
          "nullable": false,
          "values": [
                    "COPY IF NULL",
                    "OVERWRITE",
                    "APPEND",
                    "SUM"
          ],
          "info": "This field stores condition - if value is null then copy or if value exists then overwrite"
}
      },
      "fk_tables": []
    }
  }
};
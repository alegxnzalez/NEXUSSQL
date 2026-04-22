// OB_SU_CONTENT_ATTRIBUTE.js

window.OB_SU_CONTENT_ATTRIBUTE = {
  "tables": {
    "OB_SU_CONTENT_ATTRIBUTE": {
      "columns": {
        "OB_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OB_SHIP_UNIT_CONTENT",
          "info": "The GID for the order base ship unit. "
        },
        "SEQUENCE_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OB_SHIP_UNIT_CONTENT",
          "info": "The sequence number (key) associated to this ship unit attribute. "
        },
        "ITEM_FEATURE_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ITEM_FEATURE_QUAL",
          "info": "The item feature qualifier GID defining what type of feature this value is associated with. "
        },
        "ITEM_FEATURE_VALUE": {
          "type": "VARCHAR2(1000)",
          "nullable": false,
          "key_value": true,
          "info": "The item feature value for the order base line. This allows for future structural definition of an item such as size and color. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
        }
      },
      "fk_tables": []
    }
  }
};

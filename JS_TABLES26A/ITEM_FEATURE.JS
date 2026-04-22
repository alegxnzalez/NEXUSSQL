// ITEM_FEATURE.js

window.ITEM_FEATURE = {
  "tables": {
    "ITEM_FEATURE": {
      "columns": {
        "ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ITEM",
          "info": "The GID for the item that is having an item feature added, updated, or removed."
},
        "ITEM_FEATURE_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ITEM_FEATURE_QUAL",
          "info": "The GID for the item feature qualifier/attribute  that is used to identify the feature.  For example, color."
},
        "ITEM_FEATURE_VALUE": {
          "type": "VARCHAR2(120)",
          "nullable": false,
          "key_value": true,
          "info": "The value qualified by the feature qualifier. For example, item feature qualifier = color, then item feature value = red."
},
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The effective date for this feature."
},
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The expiration date for the feature."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
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
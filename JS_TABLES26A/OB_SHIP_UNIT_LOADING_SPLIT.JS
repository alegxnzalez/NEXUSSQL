// OB_SHIP_UNIT_LOADING_SPLIT.js

window.OB_SHIP_UNIT_LOADING_SPLIT = {
  "tables": {
    "OB_SHIP_UNIT_LOADING_SPLIT": {
      "columns": {
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
},
        "OB_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OB_SHIP_UNIT",
          "info": "The GID for the order base ship unit for the split values."
},
        "SPLIT_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The split number for the ship unit."
},
        "LENGTH": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The length for the this part of the ship unit split."
},
        "LENGTH_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The length in the base unit of measure."
},
        "LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The length unit of measure."
},
        "WIDTH": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The width for the this part of the ship unit split."
},
        "WIDTH_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The width in the base unit of measure."
},
        "WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The width unit of measure."
},
        "HEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The height for the this part of the ship unit split."
},
        "HEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The height in the base unit of measure."
},
        "HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The height unit of measure."
},
        "WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The weight for the this part of the ship unit split."
},
        "WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The weight in the base unit of measure."
},
        "WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The weight unit of measure."
},
        "VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The volume for the this part of the ship unit split."
},
        "VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The volume in the base unit of measure."
},
        "VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The volume unit of measure."
}
      },
      "fk_tables": []
    }
  }
};
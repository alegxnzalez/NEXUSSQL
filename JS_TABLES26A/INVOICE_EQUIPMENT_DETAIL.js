// INVOICE_EQUIPMENT_DETAIL.js

window.INVOICE_EQUIPMENT_DETAIL = {
  "tables": {
    "INVOICE_EQUIPMENT_DETAIL": {
      "description": "One record per piece of equipment per shipment on the invoice.  Equipment that is related to the shipment for which this invoice is related.",
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE",
          "info": "The GID for the invoice."
},
        "SEQ_NUMBER": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Internal database sequence number related to each invoice equipment entry."
},
        "EQUIPMENT_INITIAL_NUMBER": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The Equipment Initial/Number field is a concatenation of equipment initial and equipment number. The initial is a mark that is registered with national or international authorities that is associated with a specific owner."
},
        "S_EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "S_EQUIPMENT",
          "info": "The GID for the shipment equipment."
},
        "EQUIPMENT_PREFIX": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "The prefix of the equipment that was used for the shipment that relates to this invoice."
},
        "EQUIPMENT_NUMBER": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The number for the equipment."
},
        "ISO_EQUIPMENT_TYPE_IDENTIFIER": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The ISO equipment type identifier."
},
        "DESCRIPTION_CODE": {
          "type": "VARCHAR2(60)",
          "nullable": true,
          "info": "Description code."
},
        "EQUIPMENT_OWNER_IDENTIFIER": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The identifier of the equipment owner."
},
        "OWNERSHIP_CODE": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "Ownership code."
},
        "LENGTH": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The length of the equipment."
},
        "LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the LENGTH."
},
        "LENGTH_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The length of the equipment in the base unit of measure."
},
        "WIDTH": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The width of the equipment."
},
        "WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the WIDTH."
},
        "WIDTH_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The width of the equipment in the base unit of measure."
},
        "HEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The height of the equipment."
},
        "HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the HEIGHT."
},
        "HEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The height of the equipment in the base unit of measure."
},
        "WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The weight of the equipment."
},
        "WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the WEIGHT."
},
        "WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The weight of the equipment in the base unit of measure."
},
        "VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The volume of the equipment."
},
        "VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the VOLUME."
},
        "VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The volume of the equipment in the base unit of measure."
},
        "TARE_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Weight of equipment when empty."
},
        "TARE_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the tare weight."
},
        "TARE_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The tare weight in base units."
},
        "DUNNAGE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Dunnage."
},
        "DUNNAGE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Dunnage unit of measure code."
},
        "DUNNAGE_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Dunnage in base unit of measure."
},
        "UNIT_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "Unit count."
},
        "WEIGHT_QUALIFIER": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "info": "Weight qualifier."
},
        "MINIMUM_TEMPERATURE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The minimum temperature for the equipment."
},
        "MIN_TEMP_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The minimum temperature unit of measure."
},
        "MINIMUM_TEMPERATURE_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The minimum temperature in base units."
},
        "MAXIMUM_TEMPERATURE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The maximum temperature for the equipment."
},
        "MAX_TEMP_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The maximum temperature unit of measure."
},
        "MAXIMUM_TEMPERATURE_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The maximum temperature in base units."
},
        "PERCENT_HUMIDITY_ALLOWED": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "The maximum percentage of humidity allowed for the equipment."
},
        "VENT_SETTING_CODE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "The vent setting code."
},
        "WEIGHT_ALLOWANCE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The regulatory maximum weight for the equipment."
},
        "WEIGHT_ALLOWANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The weight allowance unit of measure."
},
        "WEIGHT_ALLOWANCE_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The weight allowance in base units."
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
      "fk_tables": [
        "INVOICE_EQUIPMENT_SEAL"
]
    }
  }
};
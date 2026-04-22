// WORK_INVOICE_ACTIVITY.js

window.WORK_INVOICE_ACTIVITY = {
  "tables": {
    "WORK_INVOICE_ACTIVITY": {
      "description": "lines on the Work Invoice; list of activities performed by driver for the shipment",
      "columns": {
        "WORK_INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "WORK_INVOICE",
          "info": "The GID for the work invoice."
},
        "SEQUENCE": {
          "type": "NUMBER(9)",
          "nullable": false,
          "key_value": true,
          "info": "The line number of the activity record."
},
        "ACTIVITY_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date activity was performed."
},
        "SPECIAL_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SPECIAL_SERVICE",
          "info": "Special Service GID for the activity performed."
},
        "SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Source location of the activity."
},
        "DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Destination location of the activity."
},
        "PAYABLE_INDICATOR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYABLE_INDICATOR",
          "info": "Indicates the payable state of this activity (ex: Payable, Not Payable, Display as Zero, etc.)."
},
        "DISTANCE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Distance for the activity."
},
        "DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the distance."
},
        "DISTANCE_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Distance value in the base unit of measure."
},
        "DURATION": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Duration for the activity."
},
        "DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Duration unit of measure."
},
        "DURATION_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Duration value in the base unit of measure."
},
        "WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Weight for the activity."
},
        "WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the weight."
},
        "WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Weight value in the base unit of measure."
},
        "VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Volume for the activity."
},
        "VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the volume."
},
        "VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Volume value in the base unit of measure."
},
        "SHIP_UNIT_COUNT": {
          "type": "NUMBER(9)",
          "nullable": true,
          "info": "Count for the activity (such as number of ship units)."
},
        "ITEM_PACKAGE_COUNT": {
          "type": "NUMBER(9)",
          "nullable": true,
          "info": "Package item count."
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
},
        "SHIPMENT_SPECIAL_SERVICE_SEQ": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Shipment special service sequence"
}
      },
      "fk_tables": []
    }
  }
};
// LOCATION_THU_CAPACITY.js

window.LOCATION_THU_CAPACITY = {
  "tables": {
    "LOCATION_THU_CAPACITY": {
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
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION_ROLE_PROFILE",
          "info": "The GID for the location.  The Location Transport Handling Unit Capacity capabilities are used to define the transport handling unit capacity for a location and location role combination.   For example, ship units being delivered to Location A can have a maximum of 1000 pounds when packed into transport handling unit XYZ. However, the same ship units loaded into transport handling unit ABC can have 2000 pounds. You could also define another transport handling unit whose constraints are based on size rather than weight. Note: The capabilities related to the Location Transport Handling Unit Capacity are only checked/applicable for the destination location. They are not considered for the source location."
},
        "LOCATION_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION_ROLE_PROFILE",
          "info": "The GID for the location role."
},
        "TRANSPORT_HANDLING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "The GID for the transport handling unit."
},
        "MAX_LENGTH": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Value for the maximum length of the  transportation handling unit. Note: The Max Width field (as well as the Max Length and Max Height fields) are different from the Max Weight and Max Volume fields that are used to constrain the ship unit. The Max Width (and Length and Height) are used to check against each packaging unit or packaged item, not the ship unit."
},
        "MAX_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the maximum length."
},
        "MAX_LENGTH_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Value for maximum length in the base unit of measure."
},
        "MAX_WIDTH": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Value for the maximum width of the  transportation handling unit. Note: The Max Width field (as well as the Max Length and Max Height fields) are different from the Max Weight and Max Volume fields that are used to constrain the ship unit. The Max Width (and Length and Height) are used to check against each packaging unit or packaged item, not the ship unit."
},
        "MAX_WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the maximum width."
},
        "MAX_WIDTH_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Value for maximum width  in the base unit of measure."
},
        "MAX_HEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Value for the maximum height of the  transportation handling unit. Note: The Max Width field (as well as the Max Length and Max Height fields) are different from the Max Weight and Max Volume fields that are used to constrain the ship unit. The Max Width (and Length and Height) are used to check against each packaging unit or packaged item, not the ship unit."
},
        "MAX_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the maximum width."
},
        "MAX_HEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Value for maximum width  in the base unit of measure."
},
        "MAX_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Value for the maximum weight of the  transportation handling unit."
},
        "MAX_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the maximum weight."
},
        "MAX_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Value for maximum weight  in the base unit of measure."
},
        "MAX_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Value for the maximum volume of the  transportation handling unit."
},
        "MAX_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the maximum volume."
},
        "MAX_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Value for maximum volume  in the base unit of measure."
},
        "IS_FULLY_LAYERED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "You should select the Fully Layered check box if this location only takes a full-layered ship unit based on the TiHi definition. A full-layered ship unit has no partial layers. For example, you are packing 23 boxes into a given PALLET (THU) and the TiHi specified for the pallet is 6 x 4. Normally, you would pack them onto one pallet with 3 full layers and one partial layer of 5 boxes. However, if you allow only full layers, you would pack only 3 full layers and leave the remaining 5 to pack with other items. Building a full layered ship unit, when required, would only be honored when a ship unit is building from a single order release line using the AUTO CALC ship unit building method. It will not be honored when ship unit is built from multiple order release lines even when those lines have the same packaged item."
}
      },
      "fk_tables": []
    }
  }
};
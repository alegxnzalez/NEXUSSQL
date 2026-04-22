// LOCATION_CAPACITY_D.js

window.LOCATION_CAPACITY_D = {
  "tables": {
    "LOCATION_CAPACITY_D": {
      "columns": {
        "LOCATION_CAPACITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION_CAPACITY"
},
        "ACTIVITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ACTIVITY"
},
        "CAPACITY_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Possible values: WEIGHT, VOLUME, SHIPMENT, TEU, FEU, and all Equipment_Reference_Unit_GIDs"
},
        "CAPACITY_ALLOCATION_RULE": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "values": [
                    "FIRST BUCKET",
                    "ALL BUCKETS",
                    "DISTRIBUTE"
          ],
          "info": "Possible values: FIRST BUCKET, ALL BUCKETS, DISTRIBUTE"
},
        "TIME_BUCKET_DURATION": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Duration of each bucket"
},
        "TIME_BUCKET_DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
},
        "TIME_BUCKET_DURATION_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "MAXIMUM_QUANTITY": {
          "type": "NUMBER(9)",
          "nullable": true,
          "info": "The maximum quantity per bucket the location can handle. Cannot be exceeded. Only valid when CAPACITY_TYPE is neither WEIGHT nor VOLUME."
},
        "MAXIMUM_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The maximum weight per bucket the location can handle.  Cannot be exceeded.  Only valid when CAPACITY_TYPE is WEIGHT."
},
        "MAXIMUM_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MAXIMUM_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "MAXIMUM_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The maximum volume per bucket the location can handle.  Cannot be exceeded. Only valid when CAPACITY_TYPE is VOLUME."
},
        "MAXIMUM_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MAXIMUM_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "TARGET_QUANTITY": {
          "type": "NUMBER(9)",
          "nullable": true,
          "info": "The ideal quantity per bucket the location should handle.  Can be exceeded, but pay above target penalty.  Only valid when CAPACITY_TYPE is neither WEIGHT nor VOLUME."
},
        "TARGET_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The ideal weight per bucket the location should handle. Only valid when CAPACITY_TYPE is WEIGHT."
},
        "TARGET_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "TARGET_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "TARGET_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The ideal volume per bucket the location should handle. Only valid when CAPACITY_TYPE is VOLUME."
},
        "TARGET_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "TARGET_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "BELOW_TARGET_PENALTY": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Below target penalty per quantity, or per weight unit (TARGET_WEIGHT_UOM_CODE), or per volume unit (TARGET_VOLUME_UOM_CODE)"
},
        "BELOW_T_PENALTY_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
},
        "BELOW_TARGET_PENALTY_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "ABOVE_TARGET_PENALTY": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Above target penalty per quantity, or per weight unit (TARGET_WEIGHT_UOM_CODE), or per volume unit (TARGET_VOLUME_UOM_CODE)"
},
        "ABOVE_T_PENALTY_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
},
        "ABOVE_TARGET_PENALTY_BASE": {
          "type": "NUMBER",
          "nullable": true
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
      "fk_tables": [
        "LOCATION_CAPACITY_OVERRIDE"
]
    }
  }
};
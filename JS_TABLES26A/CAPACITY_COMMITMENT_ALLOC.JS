// CAPACITY_COMMITMENT_ALLOC.js

window.CAPACITY_COMMITMENT_ALLOC = {
  "tables": {
    "CAPACITY_COMMITMENT_ALLOC": {
      "columns": {
        "CAPACITY_COMMITMENT_ALLOC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "CAPACITY_COMMITMENT_ALLOC_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": false
},
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": false
},
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "X_LANE"
},
        "COMMITMENT_LANE_OBJECT_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
                    "SHIPMENT",
                    "ORDER"
          ]
},
        "ALLOCATION_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
                    "SHIPMENT",
                    "MILEAGE",
                    "WEIGHT",
                    "VOLUME",
                    "MONETARY",
                    "FEU",
                    "TEU",
                    "EQUIPMENT_GROUP_PROFILE",
                    "ERU"
          ]
},
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE"
},
        "TIME_PERIOD_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TIME_PERIOD_TYPE"
},
        "IS_RECURRING": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
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
},
        "ALLOCATION_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ALLOCATION_GROUP"
},
        "EQUIPMENT_REFERENCE_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_REFERENCE_UNIT",
          "info": "The equipment reference unit GID that is associated with the equipment reference unit utilization of the shipment."
},
        "MIN_SHIPMENT_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Minimum Shipment Weight"
},
        "MAX_SHIPMENT_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Maximum Shipment Weight"
},
        "SHIP_UNIT_COUNT": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
                    "IGNORE",
                    "SINGLE",
                    "MULTIPLE"
          ],
          "info": "Ship Unit Count indicates whether the allocation applies specifically to shipments with single or multiple ship units.  Ignore indicates that the allocation applies to shipments regardless of how many ship units are on the shipment. Single  indicates that the allocation applies only to shipments with only one ship unit (with a count of 1). Multiple indicates that the allocation applied only to shipments with multiple ship units (or a single ship unit with a count of more than 1)."
},
        "MIN_SHIPMENT_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the minimum shipment weight."
},
        "MIN_SHIPMENT_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Minimum shipment weight in base units."
},
        "MAX_SHIPMENT_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the maximum shipment weight."
},
        "MAX_SHIPMENT_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Maximum shipment weight in base units."
},
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP",
          "info": "The GID for the equipment group."
}
      },
      "fk_tables": [
        "CAPACITY_COMMITMENT_ALLOC_D",
        "COMMIT_ALLOC_USAGE"
]
    }
  }
};
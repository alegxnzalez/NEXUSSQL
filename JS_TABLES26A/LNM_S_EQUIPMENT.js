// LNM_S_EQUIPMENT.js

window.LNM_S_EQUIPMENT = {
  "tables": {
    "LNM_S_EQUIPMENT": {
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
        "SCENARIO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LNM_SCENARIO"
},
        "S_EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "S_EQUIPMENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "A system generated unique identifier for the shipment equipment (without the domain)."
},
        "EQUIPMENT_INITIAL": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "Number identifying the equipment used, which is not represented by a record in GC3's  EQUIPMENT table (use EQUIPMENT_GID for that)."
},
        "EQUIPMENT_NUMBER": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Number identifying the equipment used, which is not represented by a record in GC3'S EQUIPMENT table (use EQUIPMENT_GID for that)."
},
        "EQUIPMENT_INITIAL_NUMBER": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "EQUIPMENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "WEIGHT_QUALIFIER": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Indicates what the SCALE_WEIGHT and TARE_WEIGHT fields represent: Estimate, Net or Gross weight,"
},
        "SCALE_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Weight recorded by scale when equipment is loaded."
},
        "SCALE_WEIGHT_UOM": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Weight UOM for SCALE_WEIGHT"
},
        "SCALE_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Weight base."
},
        "TARE_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Weight of equipment when empty."
},
        "TARE_WEIGHT_UOM": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Weight UOM for TARE_WEIGHT"
},
        "TARE_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Tare weight base."
},
        "SCALE_LOCATION": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Placeholder for scale location information."
},
        "SCALE_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Placeholder for scale name information."
},
        "SCALE_TICKET": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "info": "Sequence ID printed on the scale ticket when weight is recorded."
},
        "INTERMODAL_EQUIP_LENGTH": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Specially formatted field that is required by the railroads, representing the length of the equipement.  It is in the format FtFtInIn, so 4803 would represent 48 feet, 3 inches."
},
        "SUBSTITUTE_EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Equipment group substituted by carrier for this equipments"
},
        "LOAD_CONFIG_VOLUME": {
          "type": "NUMBER",
          "nullable": true
},
        "LOAD_CONFIG_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "LOAD_CONFIG_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "OR_EQUIPMENT_SEQ": {
          "type": "NUMBER",
          "nullable": true
},
        "LOADING_LENGTH": {
          "type": "NUMBER",
          "nullable": true
},
        "LOADING_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "LOADING_LENGTH_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "TYPE_ASSIGNMENT_CODE": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "Indicates the source of the EQUIPMENT_TYPE_GID"
},
        "ASSIGNMENT_CODE": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "Indicates the source of the EQUIPMENT_GID"
},
        "PICK_SKU_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "With PICK_SKU_QUANTITY_TYPE_GID, this identifies the pickup inventory bucket adjusted during equipment type assignment."
},
        "PICK_SKU_QUANTITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "DROP_SKU_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "With DROP_SKU_QUANTITY_TYPE_GID, this identifies the dropoff inventory bucket adjusted during equipment type assignment."
},
        "DROP_SKU_QUANTITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "IS_FREIGHT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "CHECK_DIGIT": {
          "type": "NUMBER",
          "nullable": true
},
        "LICENSE_PLATE": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "EQUIPMENT_TYPE_CODE": {
          "type": "VARCHAR2(10)",
          "nullable": true
},
        "MECHANICAL_DESIGNATION": {
          "type": "VARCHAR2(10)",
          "nullable": true
},
        "EQUIPMENT_OWNER_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true
},
        "EQUIP_MAX_GROSS_WT": {
          "type": "NUMBER",
          "nullable": true
},
        "EQUIP_MAX_GROSS_WT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "EQUIP_MAX_GROSS_WT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "FLOOR_HEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Actual height of the platform or floor above the ground or the rail."
},
        "FLOOR_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "FLOOR_HEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "EMPTY_CG_HEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "When empty, indicates the height from Top of Rail to the Center of Gravity"
},
        "EMPTY_CG_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "EMPTY_CG_HEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "DRY_CAPACITY": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The maximum interior capacity of the equipment"
},
        "DRY_CAPACITY_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "DRY_CAPACITY_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "LIQUID_CAPACITY": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The number of gallons the equipment will hold"
},
        "LIQUID_CAPACITY_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "LIQUID_CAPACITY_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "FREIGHT_CG_HEIGHT": {
          "type": "NUMBER",
          "nullable": true
},
        "FREIGHT_CG_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "FREIGHT_CG_HEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "GROSS_CG_HEIGHT": {
          "type": "NUMBER",
          "nullable": true
},
        "GROSS_CG_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "GROSS_CG_HEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "CALCULATED_GROSS_WT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The actual sum of the cargo plus the actual tare weight. A calculated version of a scale weight."
},
        "CALCULATED_GROSS_WT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "CALCULATED_GROSS_WT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "ACTUAL_LOAD_LIMIT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The maximum permissible weight of the commodity that can be loaded into the equipment."
},
        "ACTUAL_LOAD_LIMIT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "ACTUAL_LOAD_LIMIT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "ACTUAL_LENGTH": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The inside length of the actual equipment from end to end inside walls, linings, and permanent bulkheads"
},
        "ACTUAL_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "ACTUAL_LENGTH_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "ACTUAL_WIDTH": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The inside width of the actual equipment from side walls and linings"
},
        "ACTUAL_WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "ACTUAL_WIDTH_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "ACTUAL_HEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The inside height of the actual equipment from the floor to the lowest point of the interior ceiling"
},
        "ACTUAL_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "ACTUAL_HEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "BULKPLAN_SPEC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "BULKPLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
}
      },
      "fk_tables": [
        "LNM_SHIP_S_EQUIP_JOIN",
        "LNM_S_EQ_S_SHIP_UNIT_JOIN"
]
    }
  }
};
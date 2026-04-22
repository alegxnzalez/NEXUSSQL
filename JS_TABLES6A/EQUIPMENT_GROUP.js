// EQUIPMENT_GROUP.js

window.EQUIPMENT_GROUP = {
  "tables": {
    "EQUIPMENT_GROUP": {
      "columns": {
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the equipment group. "
        },
        "EQUIPMENT_GROUP_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the equipment group. "
        },
        "EQUIPMENT_GROUP_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Describes the group of equipment. "
        },
        "TEMPERATURE_CONTROL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TEMPERATURE_CONTROL",
          "info": "A GID to define the temperature controls value for the commodity. "
        },
        "EFFECTIVE_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The weight of the equipment. "
        },
        "EFFECTIVE_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the effective_weight column. "
        },
        "EFFECTIVE_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The weight of the equipment in base units. "
        },
        "EFFECTIVE_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The capacity for the equipment. "
        },
        "EFFECTIVE_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the effective_volume column. "
        },
        "EFFECTIVE_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The capacity for the equipment in base units. "
        },
        "WIDTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The width of the equipment group. "
        },
        "WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the width column. "
        },
        "WIDTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The width of the equipment group in base units. "
        },
        "LENGTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The length of the equipment group. "
        },
        "LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the length column. "
        },
        "LENGTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The length of the equipment group in base units. "
        },
        "HEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The height of the equipment group. "
        },
        "HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the height column. "
        },
        "HEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The height of the equipment group in base units. "
        },
        "TEU_EQUIVALENT_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The twenty foot unit equivalent count for this equipment group. "
        },
        "FEU_EQUIVALENT_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The forty foot unit equivalent count for this equipment group. "
        },
        "DOOR_HEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Height of the door on the equipment group. Used to check against the height of a ship unit. In many cases, the height of the door is not equal to the actual height of the equipment, which can lead to loading limitations. Use the Door Height field to specify the height of the door so the planning logic can take this under consideration. "
        },
        "DOOR_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the equipment group door height. "
        },
        "DOOR_HEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Door height in the base unit of measure. "
        },
        "CURVE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROOF_CURVATURE",
          "info": "Defined the curve function of the curved roof of the equipment group. "
        },
        "IS_CONTAINER": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "The is container check box to identifies container equipment groups. Equipment groups with this check box marked are considered during the unitization process that can occur when running the Build Buy Shipment on Primary Leg action for an order release. "
        },
        "MAX_LHS_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The max weight allowed on the left hand side of the equipment. "
        },
        "MAX_LHS_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the maximum left hand side weight for the equipment group. "
        },
        "MAX_LHS_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Maximum left hand side weight in the base unit of measure. "
        },
        "MAX_RHS_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The max weight allowed on the right hand side of the equipment. "
        },
        "MAX_RHS_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the maximum right hand side weight for the equipment group. "
        },
        "MAX_RHS_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Maximum right hand side weight in the base unit of measure. "
        },
        "MAX_SIDE_WEIGHT_DIFF": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The max weight difference allowed between two sides (left and right) of the equipment to prevent load imbalance. "
        },
        "MAX_SIDE_WEIGHT_DIFF_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the maximum difference between two sides weight. "
        },
        "MAX_SIDE_WEIGHT_DIFF_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Maximum difference between two sides weight in the base unit of measure. "
        },
        "ALLOW_LIFO_ONLY": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates whether the equipment is for LIFO only. "
        },
        "MAX_LENGTH_PER_UNIT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Stores the maximum per ship unit length allowed. "
        },
        "MAX_LENGTH_PER_UNIT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Maximum per ship unit length unit of measure. "
        },
        "MAX_LENGTH_PER_UNIT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Maximum per ship unit length in the base unit of measure. "
        },
        "MAX_WIDTH_PER_UNIT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Stores the maximum per ship unit width allowed. "
        },
        "MAX_WIDTH_PER_UNIT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Maximum per ship unit width unit of measure. "
        },
        "MAX_WIDTH_PER_UNIT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Maximum per ship unit width in the base unit of measure. "
        },
        "MAX_HEIGHT_PER_UNIT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Stores the maximum per ship unit height allowed. "
        },
        "MAX_HEIGHT_PER_UNIT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Maximum per ship unit height unit of measure. "
        },
        "MAX_HEIGHT_PER_UNIT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Maximum per ship unit height in the base unit of measure. "
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
          "info": "Date and time of the most recent data update. "
        },
        "EXTERIOR_LENGTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Stores the exterior length of the equipment group. "
        },
        "EXTERIOR_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The exterior length unit of measure. "
        },
        "EXTERIOR_LENGTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The exterior length in the base unit of measure. "
        },
        "EXTERIOR_WIDTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Stores the width length of the equipment group. "
        },
        "EXTERIOR_WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The exterior width unit of measure. "
        },
        "EXTERIOR_WIDTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The exterior width in the base unit of measure. "
        },
        "EXTERIOR_HEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Stores the exterior height of the equipment group. "
        },
        "EXTERIOR_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The exterior height unit of measure. "
        },
        "EXTERIOR_HEIGHT_BASE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The exterior height in the base unit of measure. "
        },
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "COMB_EQUIP_GRP_STRUCT_SEQ": {
          "type": "NUMBER()",
          "nullable": true,
          "foreign_key": "COMB_EQUIP_GRP_STRUCT",
          "info": "If the equipment group is a composite equipment group, it will have this comb_equip_grp_struct_seq populated. It contains the list of equipment groups that belong to a double or triple. "
        },
        "COMPARTMENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COMPARTMENT_TYPE",
          "info": "A GID to define the compartment type. "
        },
        "HAS_METER": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if the compartment has METER or not. (The METER is a device that is used the measure how much product is discharged at any given stop). "
        },
        "COMMODITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COMMODITY",
          "info": "The commodity that is compatible with the equipment group. "
        },
        "IS_BULK": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if it is a BULK. If Y then BULK If N then PACKAGED. "
        },
        "EQUIPMENT_TYPE_CODE": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "info": "Alphanumeric code used to designate a specific type of equipment and attributes. "
        },
        "MECHANICAL_DESIGNATION": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "info": "Alphabetic code assigned to the physical description of the unit. "
        },
        "EQUIPMENT_OWNER_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "The type of company that owns the stenciled mark on the equipment. For example private or carrier. "
        },
        "EQUIP_MAX_GROSS_WT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum permissible weight of the equipment and the load. "
        },
        "EQUIP_MAX_GROSS_WT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Equipment gross weight unit of measure. "
        },
        "EQUIP_MAX_GROSS_WT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Equipment gross weight in the base unit of measure. "
        },
        "FLOOR_HEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Actual height of the platform or floor above the ground or the rail. "
        },
        "FLOOR_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Floor height unit of measure. "
        },
        "FLOOR_HEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Floor height in the base unit of measure "
        },
        "EMPTY_CG_HEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "When empty, indicates the height from Top of Rail to the Center of Gravity. "
        },
        "EMPTY_CG_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Empty center of gravity height unit of measure. "
        },
        "EMPTY_CG_HEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Empty center of gravity height in the base unit of measure. "
        },
        "TRUCK_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRUCK_TYPE",
          "info": "An GID to define the Truck Type to Categorize the Equipment Group. "
        },
        "PULLING_LENGTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Interpreted as the length from the king pin to the rear of the trailer for Semi-Trailer Truck Type. Interpreted as the length from the hitch to the rear of the trailer for Pony-Trailer Truck Type. Interpreted as the length from the front of the vehicle to the hitch for the Dromedary Truck Type. "
        },
        "PULLING_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of Measure for the PULLING_LENGTH column. "
        },
        "PULLING_LENGTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "This column contains the PULLING_LENGTH in base units. "
        },
        "TARE_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The tare weight of the equipment group. "
        },
        "TARE_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Tare weight of the equipment group unit of measure. "
        },
        "TARE_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the tare weight column. "
        },
        "EMPTY_CG_LENGTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "When empty, length wise position of center of gravity from the equipment bottom leftmost corner. "
        },
        "EMPTY_CG_LENGTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Empty center of gravity length in the base unit of measure. "
        },
        "EMPTY_CG_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the empty center of gravity length column. "
        },
        "EMPTY_CG_WIDTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "When empty, width wise position of center of gravity from the equipment bottom leftmost corner. "
        },
        "EMPTY_CG_WIDTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Empty center of gravity width in the base unit of measure. "
        },
        "EMPTY_CG_WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the empty center of gravity width column."
        }
      },
      "fk_tables": [
        "CAPACITY_OVERRIDE_LINE",
        "COMB_EQUIP_GRP_STRUCT_D",
        "CONSOL_EQUIP_GROUP_D",
        "EQUIPMENT_CONVERSION",
        "EQUIPMENT_GROUP_COMPARTMENT",
        "EQUIPMENT_GROUP_PI_JOIN",
        "EQUIPMENT_GROUP_PROFILE_D",
        "EQUIPMENT_TYPE_JOIN",
        "EQUIP_AXLE_LOADING_WEIGHT",
        "EQUIP_GROUP_EQUIP_REF_UNIT",
        "EQUIP_GROUP_OBSTRUCTION",
        "LANE_SUMMARY_STAT",
        "LOAD_CONFIG_RULE",
        "LOGISTICS_GUIDE_DETAIL",
        "OB_LEG_CONSTRAINT",
        "OB_ORDER_BASE",
        "ORDER_MOVEMENT",
        "ORDER_RELEASE",
        "ORDER_RELEASE_LEG_CONSTRAINT",
        "OR_EQUIPMENT",
        "P_BID",
        "P_SHIPMENT",
        "QUOTE_COST_OPTION_EQUIPMENT",
        "QUOTE_EQUIPMENT_GROUP",
        "REPETITION_SCHEDULE",
        "SERVPROV_TENDER_EQUIPMENT",
        "SHIPMENT",
        "SHIP_GROUP",
        "SHIP_GROUP_RULE",
        "SHIP_UNIT_SPEC_EQUIP_GRP_COMP",
        "S_EQUIPMENT",
        "VEHICLE_TYPE_EQP_GRP_COMP"
      ]
    }
  }
};

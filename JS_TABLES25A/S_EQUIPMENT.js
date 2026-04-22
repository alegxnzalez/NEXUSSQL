// S_EQUIPMENT.js

window.S_EQUIPMENT = {
  "tables": {
    "S_EQUIPMENT": {
      "columns": {
        "S_EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the Equipment associated to a Shipment "
        },
        "S_EQUIPMENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the equipment associated to a shipment. "
        },
        "EQUIPMENT_INITIAL": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "The initial is a mark that is registered with national or international authorities that is associated with a specific owner. "
        },
        "EQUIPMENT_NUMBER": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Number identifying the equipment used. "
        },
        "EQUIPMENT_INITIAL_NUMBER": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "A concatenation of the equipment initial and equipment number. "
        },
        "EQUIPMENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_TYPE",
          "info": "An equipment type is a category of equipment. The system uses equipment types when it determines equipment capacity. "
        },
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP",
          "info": "An equipment group identifies the kind of equipment such as dry vans, flatbed trucks, container cars, hoppers, tankers, box cars, etc.. Equipment groups are primarily used by rate offering applied to the cost of moving goods on a class of equipment defined by the equipment group ID. "
        },
        "EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The GID for the actual equipment asset record. "
        },
        "WEIGHT_QUALIFIER": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "E",
            "G",
            "N"
          ],
          "info": "Indicates what the scale weight and tare weight fields represent: estimate, net or gross weight. "
        },
        "SCALE_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Weight recorded by scale when the equipment is loaded. "
        },
        "SCALE_WEIGHT_UOM": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the equipment scale weight. "
        },
        "SCALE_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The equipment scale weight in the base unit of measure. "
        },
        "TARE_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Weight of equipment when empty. "
        },
        "TARE_WEIGHT_UOM": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The equipment tare weight unit of measure. "
        },
        "TARE_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The equipment tare weight in the base unit of measure. "
        },
        "SCALE_LOCATION": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Scale location information. "
        },
        "SCALE_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Scale name information. "
        },
        "SCALE_TICKET": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "info": "The sequence ID printed on the scale ticket when weight is recorded. "
        },
        "INTERMODAL_EQUIP_LENGTH": {
          "type": "NUMBER(4)",
          "nullable": true,
          "info": "A specially formatted field that is required by the railroads, representing the length of the equipment. It is in the format FtFtInIn, so 4803 would represent 48 feet, 3 inches. "
        },
        "SUBSTITUTE_EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP",
          "info": "The equipment group substituted by carrier for this equipment. "
        },
        "LOAD_CONFIG_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The actual volume taken by loading the units. Normally, it is larger than the total volume computed using the unit volume of the unit. "
        },
        "LOAD_CONFIG_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The equipment load configuration volume unit of measure. "
        },
        "LOAD_CONFIG_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The equipment load configuration volume in the base unit of measure. "
        },
        "OR_EQUIPMENT_SEQ": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "N/A "
        },
        "LOADING_LENGTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The equipment loading length (view only). Created by the system and shows the occupied load length of the equipment. If you have a 48 foot unit and 35 feet is used then the loading length is 35. "
        },
        "LOADING_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The equipment loading length unit of measure. "
        },
        "LOADING_LENGTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The equipment loading length in the base unit of measure. "
        },
        "TYPE_ASSIGNMENT_CODE": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "values": [
            "FIXED FROM ORDER",
            "RESOURCE CAPACITY",
            "USER FIXED",
            "DRIVER OPTIMIZATION"
          ],
          "info": "The type assignment code (view only) indicates if the equipment is fixed from the order (equipment type was specified on order) or resource capacity, meaning it came from the resource assignment during the build shipment process. "
        },
        "ASSIGNMENT_CODE": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "values": [
            "FIXED FROM ORDER",
            "USER FIXED",
            "DRIVER OPTIMIZATION"
          ],
          "info": "The assignment code (view only) indicates how the equipment was assigned. "
        },
        "PICK_SKU_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SKU_QUANTITY",
          "info": "With "
        },
        "PICK_SKU_QUANTITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SKU_QUANTITY",
          "info": "With the PICK_SKU_QUANTITY_GID, this indicates the pickup inventory bucket adjusted during equipment type assignment. "
        },
        "DROP_SKU_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SKU_QUANTITY",
          "info": "With the "
        },
        "DROP_SKU_QUANTITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SKU_QUANTITY",
          "info": "With the  DROP_SKU_QUANTITY_GID this indicates the drop-off inventory bucket adjusted during equipment type assignment. "
        },
        "IS_FREIGHT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if the equipment is carrying freight. "
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
        "CHECK_DIGIT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The Check Digit field is used to validate that the Equipment Initial/Number field is entered correctly. You can leave this field blank if you do not want to validate Equipment Initial/Number. The ISO 6346 for ocean containers is used to verify the check digit value "
        },
        "LICENSE_PLATE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Informational field for identification. "
        },
        "EQUIPMENT_TYPE_CODE": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "info": "The Equipment Type Code field is used to designate a specific type of equipment and attributes. For information only. "
        },
        "MECHANICAL_DESIGNATION": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "info": "The Mechanical Designation field is an alphabetic code assigned to the physical description of the unit. For information only. "
        },
        "EQUIPMENT_OWNER_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "The asset owner of the equipment. "
        },
        "EQUIP_MAX_GROSS_WT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum allowed gross weight for the equipment. "
        },
        "EQUIP_MAX_GROSS_WT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The equipment maximum gross weight unit of measure. "
        },
        "EQUIP_MAX_GROSS_WT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The equipment maximum gross weight in the base unit of measure. "
        },
        "FLOOR_HEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The actual height of the platform or floor above the ground or the rail. "
        },
        "FLOOR_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The equipment floor height unit of measure. "
        },
        "FLOOR_HEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The equipment floor height in the base unit of measure. "
        },
        "EMPTY_CG_HEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "When empty, indicates the height from top of rail to the center of gravity. "
        },
        "EMPTY_CG_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The equipment empty center of gravity height unit of measure. "
        },
        "EMPTY_CG_HEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The equipment empty center of gravity height in the base unit of measure. "
        },
        "DRY_CAPACITY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum interior capacity of the equipment. "
        },
        "DRY_CAPACITY_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The equipment dry capacity unit of measure. "
        },
        "DRY_CAPACITY_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The equipment dry capacity in the base unit of measure. "
        },
        "LIQUID_CAPACITY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The number of gallons the equipment will hold. "
        },
        "LIQUID_CAPACITY_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The equipment liquid capacity unit of measure. "
        },
        "LIQUID_CAPACITY_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The equipment liquid capacity in the base unit of measure. "
        },
        "FREIGHT_CG_HEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The freight center of gravity (view only) shows the calculated center of gravity values for the freight length, width and height. "
        },
        "FREIGHT_CG_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The equipment freight center of gravity unit of measure. "
        },
        "FREIGHT_CG_HEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The equipment freight center of gravity in the base unit of measure. "
        },
        "GROSS_CG_HEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "When full, indicates the height from the top of rail to the center of gravity. "
        },
        "GROSS_CG_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The equipment gross center of gravity unit of measure. "
        },
        "GROSS_CG_HEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The equipment gross center of gravity in the base unit of measure. "
        },
        "CALCULATED_GROSS_WT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The actual sum of the cargo plus the actual tare weight. A calculated version of a scale weight. "
        },
        "CALCULATED_GROSS_WT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The equipment calculated gross weight unit of measure "
        },
        "CALCULATED_GROSS_WT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The equipment calculated gross weight in the base unit of measure. "
        },
        "ACTUAL_LOAD_LIMIT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum permissible weight of the commodity that can be loaded into the equipment. "
        },
        "ACTUAL_LOAD_LIMIT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The equipment actual load limit unit of measure. "
        },
        "ACTUAL_LOAD_LIMIT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The equipment actual load limit in the base unit of measure. "
        },
        "ACTUAL_LENGTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The inside length of the actual equipment from end to end inside walls, linings, and permanent bulkheads. "
        },
        "ACTUAL_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The equipment actual length unit of measure. "
        },
        "ACTUAL_LENGTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The equipment actual length in the base unit of measure. "
        },
        "ACTUAL_WIDTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The inside width of the actual equipment from side walls and linings. "
        },
        "ACTUAL_WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The equipment actual width unit of measure. "
        },
        "ACTUAL_WIDTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The equipment actual width in the base unit of measure. "
        },
        "ACTUAL_HEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The inside height of the actual equipment from the floor to the lowest point of the interior ceiling. "
        },
        "ACTUAL_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The equipment actual height unit of measure. "
        },
        "ACTUAL_HEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The equipment actual height in the base unit of measure. "
        },
        "EMPTY_CG_LENGTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "When empty, the lengthwise position of the center of gravity from the equipment bottom leftmost corner. "
        },
        "EMPTY_CG_LENGTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The equipment empty center of gravity length unit of measure. "
        },
        "EMPTY_CG_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The equipment empty center of gravity in the base unit of measure. "
        },
        "EMPTY_CG_WIDTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "When empty, the widthwise position of the center of gravity from the equipment bottom leftmost corner. "
        },
        "EMPTY_CG_WIDTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The equipment empty center of gravity width unit of measure. "
        },
        "EMPTY_CG_WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The equipment empty center of gravity width in the base unit of measure. "
        },
        "FREIGHT_CG_LENGTH": {
          "type": "NUMBER()",
          "nullable": true
        },
        "FREIGHT_CG_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "FREIGHT_CG_LENGTH_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "FREIGHT_CG_WIDTH": {
          "type": "NUMBER()",
          "nullable": true
        },
        "FREIGHT_CG_WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "FREIGHT_CG_WIDTH_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "GROSS_CG_LENGTH": {
          "type": "NUMBER()",
          "nullable": true
        },
        "GROSS_CG_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "GROSS_CG_LENGTH_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "GROSS_CG_WIDTH": {
          "type": "NUMBER()",
          "nullable": true
        },
        "GROSS_CG_WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "GROSS_CG_WIDTH_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TRUCK_CENTER_LENGTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The length between the centers of the two truck/bogie systems. Applicable only to rail cars. "
        },
        "TRUCK_CENTER_LENGTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The length between the centers of the two truck/bogie systems in the base unit of measure. "
        },
        "TRUCK_CENTER_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the length between the centers of the two truck/bogie systems "
        },
        "TRUCK_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total number of trucks/bogies on the equipment. Applicable only to rail cars. "
        },
        "TOTAL_AXLE_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total number of axles on the equipment. Applicable only to rail cars. "
        },
        "MAX_AXLE_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Maximum allowed axle weight. Applicable only to rail cars. "
        },
        "MAX_AXLE_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Maximum allowed axle weight in the base unit of measure. "
        },
        "MAX_AXLE_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the maximum allowed axle weight. "
        },
        "TRUCK_A_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Calculated weight on the truck/bogie A. A represents the bogie nearest to the origin of the equipment group.Applicable only to rail cars. "
        },
        "TRUCK_A_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TRUCK_A_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "TRUCK_A_AXLE_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Calculated axle weight on the truck/bogie A. A represents the bogie nearest to the origin of the equipment group.Applicable only to rail cars. "
        },
        "TRUCK_A_AXLE_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TRUCK_A_AXLE_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "TRUCK_B_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Calculated weight on the truck/bogie B. B represents the bogie at the end of the equipment group.Applicable only to rail cars. "
        },
        "TRUCK_B_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TRUCK_B_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "TRUCK_B_AXLE_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Calculated axle weight on the truck/bogie B. B represents the bogie at the end of the equipment group.Applicable only to rail cars. "
        },
        "TRUCK_B_AXLE_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TRUCK_B_AXLE_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "AXLE_WEIGHT_IMBALANCE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Denotes the ratio between the calculated axles weights.Applicable only to rail cars."
        }
      },
      "fk_tables": [
        "APPOINTMENT",
        "CONTAINER_GROUP_D",
        "DM_TRANSACTION",
        "INVOICE_EQUIPMENT_DETAIL",
        "SERVPROV_TENDER_EQUIPMENT",
        "SHIPMENT_STOP_DEBRIEF",
        "SHIPMENT_S_EQUIPMENT_JOIN",
        "SHIP_GROUP_D_OR",
        "S_EQUIPMENT_ATTRIBUTE",
        "S_EQUIPMENT_SEAL",
        "S_EQUIPMENT_STATUS",
        "S_EQUIPMENT_S_SHIP_UNIT_JOIN"
      ]
    }
  }
};

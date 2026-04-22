// S_SHIP_UNIT.js

window.S_SHIP_UNIT = {
  "tables": {
    "S_SHIP_UNIT": {
      "description": "This table stores the shipment ship unit information. This table was added to identify the actual shipment ship unit as opposed to order release ship unit (in earlier versions of GC3).",
      "columns": {
        "S_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the ship unit associated to a shipment."
},
        "S_SHIP_UNIT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the ship unit associated to a shipment."
},
        "TRANSPORT_HANDLING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "The transport handling unit identifier defined for the ship unit. Examples are a box and a pallet."
},
        "UNIT_LENGTH": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The length of each shipment ship unit. If this row represents 20 of the same ship units, the total length is 20 x unit length."
},
        "UNIT_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the unit length column."
},
        "UNIT_LENGTH_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The unit length in base units."
},
        "UNIT_WIDTH": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The width of each shipment ship unit. Each row may represent the ship unit count number of same ship units. If this field is null or is 0, the weight of this shipment ship unit is computed as the total of container weight from its ship unit specification and the weight of its shipment ship unit lines."
},
        "UNIT_WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the unit width."
},
        "UNIT_WIDTH_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The unit width in base units."
},
        "UNIT_HEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The height of each shipment ship unit. If this row represents the 20 same ship units, the total height is 20 x unit height."
},
        "UNIT_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for unit height column."
},
        "UNIT_HEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The unit height in base units."
},
        "UNIT_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The weight of the ship unit."
},
        "UNIT_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the unit weight."
},
        "UNIT_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The unit weight in base units."
},
        "UNIT_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The volume of each shipment ship unit. Each row may represent the ship unit count number of same ship units. If this field is null or is 0, the volume of this shipment ship unit is computed as the total of container volume from its ship unit specification and the volume of its shipment ship unit lines."
},
        "UNIT_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the unit volume."
},
        "UNIT_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The unit volume in base units."
},
        "FLEX_COMMODITY_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The user-defined commodity code for the item. For example HTS, SITC, STCC, NMFC, etc."
},
        "FLEX_COMMODITY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "FLEX_COMMODITY_QUAL",
          "info": "A GID to define the type of the commodity code. For example HTS, SITC, STCC, NMFC etc."
},
        "IS_SPLITABLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "info": "A true or false value to define whether the ship unit can be split when creating the shipments."
},
        "SHIP_UNIT_COUNT": {
          "type": "NUMBER(10)",
          "nullable": false,
          "info": "Ship units that have the same dimension/weight and contents are represented as one row in the SHIP_UNIT table. SHIP_UNIT_COUNT is the number of these ship units."
},
        "EARLY_PICKUP_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The early pickup date defined for the ship unit"
},
        "RECEIVED_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The received gross weight of the shipment ship unit. It can be entered as a stop debrief. Used for reporting purposes."
},
        "RECEIVED_WEIGHT_UOM": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The received gross weight unit of measure."
},
        "RECEIVED_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The received gross weight in the base unit of measure."
},
        "RECEIVED_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The received volume of the shipment ship unit. It can be entered as a stop debrief. Used for reporting purposes."
},
        "RECEIVED_VOLUME_UOM": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The received volume unit of measure."
},
        "RECEIVED_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The received volume in the base unit of measure."
},
        "RECEIVED_SHIP_UNIT_COUNT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The received item package count. It can be entered as a stop debrief."
},
        "SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT",
          "info": "The GID for the order release ship unit that is associated to this shipment ship unit."
},
        "UNIT_NET_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The unit net weight of the goods contained in the shipment ship unit."
},
        "UNIT_NET_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit net weight unit of measure."
},
        "UNIT_NET_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The unit net weight in the base unit of measure."
},
        "UNIT_NET_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The unit net volume of the goods contained in the shipment ship unit."
},
        "UNIT_NET_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit net volume unit of measure."
},
        "UNIT_NET_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The unit net volume in the base unit of measure."
},
        "RECEIVED_NET_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The received net weight of the shipment ship unit. It can be entered as a stop debrief. Used for reporting purposes."
},
        "RECEIVED_NET_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The received net weight unit of measure."
},
        "RECEIVED_NET_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The received net weight in the base unit of measure."
},
        "RECEIVED_NET_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The received net volume of the shipment ship unit. It can be entered as a stop debrief. Used for reporting purposes."
},
        "RECEIVED_NET_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The received net volume unit of measure."
},
        "RECEIVED_NET_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The Received net volume in the base unit of measure."
},
        "CORE_DIAMETER": {
          "type": "NUMBER",
          "nullable": true,
          "info": "For cylindrical objects, this defines the diameter of the core."
},
        "CORE_DIAMETER_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "For cylindrical objects, unit of measure for the diameter of the core."
},
        "CORE_DIAMETER_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "For cylindrical objects, the base value of the diameter of the core."
},
        "UNIT_DIAMETER": {
          "type": "NUMBER",
          "nullable": true,
          "info": "For cylindrical objects, this defines the diameter of the ship unit."
},
        "UNIT_DIAMETER_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "For cylindrical objects, the diameter of the ship unit unit of measure."
},
        "UNIT_DIAMETER_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "For cylindrical objects, the base value of the diameter of the core. For cylindrical objects, the base value of the diameter."
},
        "TAG_1": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "A flexible field to contain informational data that has been copied from the order to the shipment."
},
        "TAG_2": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "A flexible field to contain informational data that has been copied from the order to the shipment."
},
        "TAG_3": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "A flexible field to contain informational data that has been copied from the order to the shipment."
},
        "TAG_4": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "A flexible field to contain informational data that has been copied from the order to the shipment."
},
        "T_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "A GID for the order release ship unit."
},
        "IS_COUNT_SPLITTABLE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates whether the ship unit can be split on the count boundaries when planning during container optimization."
},
        "TOTAL_GROSS_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The total gross weight of the shipment ship unit (transport handling unit + lines)."
},
        "TOTAL_GROSS_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The total gross weight unit of measure."
},
        "TOTAL_GROSS_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The total gross weight in the base unit of measure."
},
        "TOTAL_GROSS_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The total gross volume of the shipment ship unit (transport handling unit + lines)."
},
        "TOTAL_GROSS_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The total gross volume unit of measure."
},
        "TOTAL_GROSS_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The total gross volume in the base unit of measure."
},
        "MARKED_FOR_PURGE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "A Boolean field. When it is set to 'Y', this row and its child data will be purged."
},
        "RANGE_START": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The range start value associated with the ship unit to handle the case where the ship unit count is >1 signifying that there are multiple instances of this record."
},
        "RANGE_END": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The range end value associated with the ship unit to handle the case where the ship unit count is >1 signifying that there are multiple instances of this record."
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
        "RELEASE_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RELEASE_METHOD",
          "info": "The release method (order configuration identifier) associated with defining this ship unit. It specifies such attributes as if the ship unit weight is calculated from the ship unit line weight."
},
        "IS_ALLOW_REPACK": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If this flag is set to false, when planning order movement that contains this ship unit or combine shipments that contains this shipment ship unit, the shipment ship unit building process will not repack this ship unit."
},
        "TOTAL_LOADING_SPLIT_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Defines the total loading split weight if the ship unit can be split to load into the equipment."
},
        "TOTAL_LS_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The total loading split weight unit of measure."
},
        "TOTAL_LS_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The total loading split weight in the base unit of measure."
},
        "TOTAL_LOADING_SPLIT_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Defines the total loading split volume if the ship unit can be split to load into the equipment."
},
        "TOTAL_LS_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The total loading split volume unit of measure."
},
        "TOTAL_LS_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The total loading split volume in the base unit of measure."
},
        "PRIORITY": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "Defines the priority associated with ship unit."
},
        "IS_FIXED_ERU_COUNT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates whether the ERU defined on shipment ship unit is used or the ERU is derived from the order. A null value means N."
}
      },
      "fk_tables": [
        "INVOICE_SHIPMENT",
        "ORDER_MOVEMENT_D",
        "SHIPMENT_REQDOC_TEXT",
        "SHIPMENT_STOP_D",
        "SHIPMENT_STOP_DEBRIEF",
        "SS_S_SHIP_UNIT",
        "S_EQUIPMENT_S_SHIP_UNIT_JOIN",
        "S_SHIP_UNIT_ACCESSORIAL",
        "S_SHIP_UNIT_EQUIP_REF_UNIT",
        "S_SHIP_UNIT_LINE",
        "S_SHIP_UNIT_PIECE",
        "S_SHIP_UNIT_REFNUM",
        "S_SHIP_UNIT_REMARK",
        "S_SHIP_UNIT_SEAL",
        "S_SHIP_UNIT_SPECIAL_SERVICE",
        "S_SHIP_UNIT_STATUS",
        "TENDER_COLLAB_SSU"
]
    }
  }
};
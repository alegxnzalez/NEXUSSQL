// LNM_S_SHIP_UNIT.js

window.LNM_S_SHIP_UNIT = {
  "tables": {
    "LNM_S_SHIP_UNIT": {
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
        "S_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "A unique pointer to define the shipment ship unit. The gid contains the domain portion."
},
        "S_SHIP_UNIT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Similar to the gid except for the domain portion."
},
        "TRANSPORT_HANDLING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "UNIT_LENGTH": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The length of each s_ship unit. If this row represents 20 same ship units, total length is 20 x UNIT_LENGTH."
},
        "UNIT_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for UNIT_LENGTH column."
},
        "UNIT_LENGTH_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "UNIT_LENGTH in base units."
},
        "UNIT_WIDTH": {
          "type": "NUMBER",
          "nullable": true,
          "info": ": it is the weight of each s_ship_unit (each row may represent SHIP_UNIT_COUNT number of same ship units). If this field is null, or is 0, the weight of this s_ship_unit is computed as the total of container weight from its ship_unit_spec and the weight of its s_ship_unit_lines mutilply."
},
        "UNIT_WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for UNIT_WEIGHT column."
},
        "UNIT_WIDTH_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "UNIT_WIDTH in base units."
},
        "UNIT_HEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The height of each s_ship unit. If this row represents 20 same ship units, total height is 20 x UNIT_HEIGHT."
},
        "UNIT_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for UNIT_HEIGHT column."
},
        "UNIT_HEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "UNIT_HEIGHT in base units."
},
        "UNIT_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The weight of the ship unit."
},
        "UNIT_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for UNIT_WEIGHT column."
},
        "UNIT_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "UNIT_WEIGHT in base units."
},
        "UNIT_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "it is the volume of each s_ship_unit unit (each row may represent SHIP_UNIT_COUNT number of same ship units). If this field is null, or is 0, the volume of this s_ship_unit is computed as the total of container volume from its ship_unit_spec and the volume of its s_ship_unit_lines."
},
        "UNIT_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for UNIT_VOLUME column."
},
        "UNIT_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "UNIT_VOLUME in base units."
},
        "FLEX_COMMODITY_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The user defined commodity code for the item. For example HTS, SITC, STCC, NMFC etc."
},
        "FLEX_COMMODITY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "A unique identifier to define the tyoe of teh commodity code. For example HTS, SITC, STCC, NMFC etc."
},
        "IS_SPLITABLE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "A true or false value to define whether the ship unit can  be splitted when creating the shipments."
},
        "SHIP_UNIT_COUNT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Ship units that have the same demension/weight and contents are represented as one row in the SHIP_UNIT table. SHIP_UNIT_COUNT is the number of these ship units."
},
        "EARLY_PICKUP_DATE": {
          "type": "DATE",
          "nullable": true
},
        "RECEIVED_WEIGHT": {
          "type": "NUMBER",
          "nullable": true
},
        "RECEIVED_WEIGHT_UOM": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "RECEIVED_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "RECEIVED_WEIGHT in base units."
},
        "RECEIVED_VOLUME": {
          "type": "NUMBER",
          "nullable": true
},
        "RECEIVED_VOLUME_UOM": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "RECEIVED_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "RECEIVED_VOLUME in base units."
},
        "RECEIVED_SHIP_UNIT_COUNT": {
          "type": "NUMBER",
          "nullable": true
},
        "SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "UNIT_NET_WEIGHT": {
          "type": "NUMBER",
          "nullable": true
},
        "UNIT_NET_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "UNIT_NET_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "UNIT_NET_VOLUME": {
          "type": "NUMBER",
          "nullable": true
},
        "UNIT_NET_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "UNIT_NET_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "RECEIVED_NET_WEIGHT": {
          "type": "NUMBER",
          "nullable": true
},
        "RECEIVED_NET_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "RECEIVED_NET_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "RECEIVED_NET_VOLUME": {
          "type": "NUMBER",
          "nullable": true
},
        "RECEIVED_NET_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "RECEIVED_NET_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "CORE_DIAMETER": {
          "type": "NUMBER",
          "nullable": true,
          "info": "For cylindrical objects, this defines the diameter of the core"
},
        "CORE_DIAMETER_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "For cylindrical objects, unit of measure for the diameter of the core"
},
        "CORE_DIAMETER_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "For cylindrical objects, the base value of the diameter of the core.  For cylindrical objects, the base value of the diameter of the core"
},
        "UNIT_DIAMETER": {
          "type": "NUMBER",
          "nullable": true
},
        "UNIT_DIAMETER_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "UNIT_DIAMETER_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "TAG_1": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "TAG_2": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "TAG_3": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "TAG_4": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "T_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "This is used as a non-foreign key reference to the order release ship unit."
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
          "nullable": true
},
        "TOTAL_GROSS_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "TOTAL_GROSS_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "TOTAL_GROSS_VOLUME": {
          "type": "NUMBER",
          "nullable": true
},
        "TOTAL_GROSS_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "TOTAL_GROSS_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "RANGE_START": {
          "type": "NUMBER",
          "nullable": true
},
        "RANGE_END": {
          "type": "NUMBER",
          "nullable": true
},
        "RELEASE_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "IS_ALLOW_REPACK": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If this flag is set to false, when planning order movement that contains this ship unit or combine shipments that contains this s ship unit, the shipment ship unit building process will not repack this ship unit."
},
        "TOTAL_LOADING_SPLIT_WEIGHT": {
          "type": "NUMBER",
          "nullable": true
},
        "TOTAL_LS_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "TOTAL_LS_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "TOTAL_LOADING_SPLIT_VOLUME": {
          "type": "NUMBER",
          "nullable": true
},
        "TOTAL_LS_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "TOTAL_LS_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "PRIORITY": {
          "type": "NUMBER",
          "nullable": true,
          "info": "This column defines the priority associated with ship unit"
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
        "LNM_SHIPMENT_STOP_D",
        "LNM_S_EQ_S_SHIP_UNIT_JOIN",
        "LNM_S_SHIP_UNIT_PIECE"
]
    }
  }
};
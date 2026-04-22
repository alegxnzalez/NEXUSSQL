// LEG.js

window.LEG = {
  "tables": {
    "LEG": {
      "columns": {
        "LEG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Contains the GID for the leg. "
        },
        "LEG_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Contains the XID for the leg. "
        },
        "LEG_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "The leg name for this itinerary leg. Note: If entering an Itinerary Leg from an Itinerary Leg Detail, instead of entering an Itinerary Leg Name, a Sequence Number is entered. "
        },
        "LEG_CLASSIFICATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LEG_CLASSIFICATION",
          "info": "The GID for the leg classification. An itinerary leg classification allows you to apply a specific label to any leg for identification purposes or to associate order release constraints with a leg. "
        },
        "SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_ROLE_PROFILE",
          "info": "Contains the GID for the source location for the leg. "
        },
        "DEST_LOCATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE",
          "info": "Contains the GID for the destination location profile for the leg. "
        },
        "DEST_LOCATION_RADIUS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The Location Radius field creates a radius around the destination location. The leg can use any location within the radius with the same role as the destination location. Enter a numeric value and a distance measure (miles, kilometers, or nautical miles) to represent size of the area. You can limit the number of locations that are evaluated by the planning logic when building a shipment by using the Max Location Count field. "
        },
        "DEST_LOCATION_RADIUS_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the destination location radius. "
        },
        "DEST_LOCATION_RADIUS_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The destination location radius in base units. "
        },
        "DEST_RADIUS_EMPHASIS": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "values": [
            "SOURCE",
            "DEST",
            "LOCATION"
          ],
          "info": "Use the Location Radius Emphasis field to determine the location that acts as the geographic center for the location radius. Make a selection from the Location Radius Emphasis drop-down menu: Select Order Source or Order Destination to assign a radius around locations defined on the order, or select Leg Location to assign the location defined on the leg.\nNote: For itineraries based on regions, if the Location Radius Emphasis field is valued, but the Location Radius field is not, destination locations are determined based on the region ID and the location role defined on the leg. All locations in the region with the same location role as the one defined on the itinerary can act as the destination. You can use this method to pinpoint locations in a region as destination that have specific roles, such as airports or seaports. "
        },
        "CREATE_SINGLE_SHIPMENT": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates whether or not there should be one shipment created per equipment needed on this leg (N) or one shipment for all equipment needed on this leg (Y). "
        },
        "IS_PRIMARY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Check box used to designate the primary leg for multi-leg itineraries. The primary leg obeys the constraints of order releases that use the itinerary. For example, it uses the transport mode, service provider, and equipment that appear on the order release. "
        },
        "SOURCE_LOCATION_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_ROLE",
          "info": "Contains the GID for the source location role for the leg. "
        },
        "DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Contains the GID for the destination location for the leg. "
        },
        "DEST_LOCATION_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_ROLE",
          "info": "Contains the GID for the destination location role for the leg. "
        },
        "SERVPROV_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV_PROFILE",
          "info": "Contains the GID for the service provider's profile for the leg. "
        },
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE",
          "info": "Contains the GID for the equipment group profile for the leg. "
        },
        "MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "MODE_PROFILE",
          "info": "Contains the GID for the mode profile for the leg. "
        },
        "QUALITY_FACTOR_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "QUALITY_FACTOR_PROFILE",
          "info": "Contains the GID for the quality factor profile. "
        },
        "EXPECTED_TRANSIT_TIME": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Contains the expected time for this leg of the shipment to take. "
        },
        "EXPECTED_TRANSIT_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "Unit of measure for the expected transit time. "
        },
        "EXPECTED_TRANSIT_TIME_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The expected transit time in base units. "
        },
        "EXPECTED_COST": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Contains the expected cost for this leg. "
        },
        "EXPECTED_COST_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The expected cost in base units. "
        },
        "EXPECTED_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "Contains the currency for the expected cost of the leg. "
        },
        "ARRANGEMENT_RESPONSIBILITY": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "N/A "
        },
        "EQUIPMENT_ASSIGNMENT_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "N",
            "O",
            "R"
          ],
          "info": "Indicates how equipment groups are assigned for this Leg. A value of 'N' indicates that No Equipment will be used (i.e. it's loose freight), 'O' stands for Optimize Equipment (i.e. run through Container Optimization), and 'R' stands for Re-use Equipment from Previous Leg (or Optimize if no previous equipment is available). "
        },
        "CALCULATE_CONTRACTED_RATE": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "The Calculate Contracted Rate check box should be selected if you want Oracle Transportation Management to calculate the cost and service time associated with the leg. When selected, Oracle Transportation Management runs processing to locate a rate for the leg. Oracle Transportation Management searches for a rate based on the lane information and matches that to the source and destination on the leg of the itinerary. "
        },
        "CALCULATE_SERVICE_TIME": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "The Calculate Service Time check box should be selected if you want to allow Oracle Transportation Management to select the service time from the rate offering that applies to the leg. Service time is made up of details such as, drive time, work time, and rest time which are associated with travelling from one location to another. For the transportation modes air, rail, and vessel travel, the service times are calculated based on transportation schedules available for each mode. Note: If using arbitrary locations on an itinerary, this check box must be selected, otherwise OTM will not be able to calculate a service time for that leg and when trying to plan the order via show routing options, planning will fail. "
        },
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_OFFERING",
          "info": "The rate offering GID. "
        },
        "RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO",
          "info": "The Rate Geo GID. "
        },
        "X_DOCK_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The cross dock location GID. "
        },
        "HAZMAT_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "The hazmat region GID. "
        },
        "INTERMEDIARY_CORPORATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CORPORATION",
          "info": "A GID that represents the corporation that the location represents. The GID contains the domain portion. "
        },
        "RULE_11_INDICATOR": {
          "type": "VARCHAR2(25)",
          "nullable": true,
          "values": [
            "TENDER",
            "NO_TENDER"
          ],
          "info": "If this is not null, it identifies the leg as being part of a rail rule 11 Itinerary segment and determines if the shipment built from the leg is tendered or not. "
        },
        "RAIL_INTER_MODAL_PLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RAIL_INTER_MODAL_PLAN",
          "info": "This is the rail inter-modal plan GID. E.g. Plan 20 - door-to-door, Plan 25 - ramp-to-ramp, etc. "
        },
        "CUSTOMER_RATE_CODE": {
          "type": "CHAR(1)",
          "nullable": true,
          "values": [
            "C",
            "S"
          ],
          "info": "This code signifies what rate is used on a Leg, either 'C' for the Customer's rate, or 'S' for the Shipper's rate. "
        },
        "COFC_TOFC": {
          "type": "CHAR(1)",
          "nullable": true,
          "values": [
            "C",
            "T",
            "F"
          ],
          "info": "Container-On-Flat-Car_Trailer-On-Flat-Car code used along with the Rail_Inter_Modal_Plan_gid to determine the rate. "
        },
        "EQUIP_GROUP_PROFILE_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIP_GROUP_PROFILE_SET",
          "info": "The GID for the Multi-Modal Equipment Set. The Multi-Modal Equipment Sets allows Oracle Transportation Management to evaluate multiple equipment options within an itinerary for both the multi-leg and multi-stop algorithms. You can specify an equipment group profile set on the leg of an itinerary that supports multi-stop planning. You can specify a single equipment group profile or a set containing multiple equipment group profiles and Oracle Transportation Management will select the best fit equipment group from within each profile and rate it. The least-cost feasible option across all these equipment groups will be chosen. "
        },
        "SERVPROV_ASSIGNMENT_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "values": [
            "O",
            "R"
          ],
          "info": "Valid values are O and R, which stand for Optimize and Re-use. \"Optimize\" will be the default and allow the system to find the best service provider for each leg. \"Re-use\" will force the system to keep the same service provider on this leg that was used on the previous one. "
        },
        "MAX_LOCATION_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Allows you to limit the number of locations that are evaluated by the planning logic when building a shipment by using the Max Location Count field. "
        },
        "AUTO_CONSOLIDATION_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
            "CONSOL INTO ONE EQUIP",
            "MULTISTOP INTO ONE EQUIP",
            "CONSOL INTO ONE SHIP MULTI EQUIP",
            "NO AUTO CONSOLIDATE"
          ],
          "info": "The Auto Consolidation Type defines the way shipments on this leg get consolidated. Choose one of the following options:\nNo Auto Consolidation indicates that there is no consolidation or multi-stop planning on this leg.\nMulti-stop into One Equipment indicates that shipments built on this leg are sent to multi-stop algorithm to consolidate into multi-stop shipments with one piece of equipment for each multi-stop shipment. Only the first leg and last leg of an itinerary can have this Auto Consolidation Type.\nConsolidate into One Equipment: indicates that shipments built on this leg with the same Source and Destination Locations are consolidated together if they can fit into one piece of equipment.\nConsolidate into One Shipment/Multiple Equipment indicates that all shipments built on this leg will be consolidated into one shipment (if time window is feasible) with multiple equipment. "
        },
        "INTERIM_POINT_OPTION": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "ALL",
            "BEST",
            "PRIOR DELV"
          ],
          "info": "The Interim Point Option indicates whether insert all, or best of the interim points of this leg in shipments that are built on this leg.\nALL inserts all the interim points for this leg this leg in their sequence.\nALL BEFORE DELIVERY add all interim points without validation prior to the first delivery stop on the shipment.\nBEST only the best interim point will be inserted based on the following: minimum of (distance-from-source-to-interim-point + distance-from-interim-point-to-destination).\nThere are two parts to the interim point insertion from the algorithm point view: changes to build shipment process and multi-stop process.\nInterim Points for Multi-stop Shipment\nIf the BEST option is selected with the following 2 shipments and each has an interim point:\nShipment 1 has Pickup 1 --> Interim Point A --> Delivery 1\nShipment 2 has Pickup 2 ---> Interim Point B --> Delivery 2\nIf Oracle Transportation Management plans the two shipments like this: P1, P2, D2, D1, then Interim Point B is inserted between P2, D2.\nIf Oracle Transportation Management plans the two shipments like this: P2, P1, D1, D2, then Interim Point A is inserted between P1, D1.\nIf the ALL option is selected, then Oracle Transportation Management inserts all the interim point between in the last pickup stop and first drop off stop.\nInterim Point for Pool/Cross-dock Shipment\nWhen there is a pool or cross-dock involved in an itinerary, multiple upstream-downstream shipments will be created for on one leg. For example, an order going through a pool may have a shipment from the source to pool and from the pool to destination. If there are interim points defined for this leg, Oracle Transportation Management inserts the Interim Points as follows:\nFor a consolidation pool, Oracle Transportation Management always inserts the Interim Points into the shipment that is out of the consolidation pool.\nIf an order goes to a deconsolidation pool and then destination, Oracle Transportation Management inserts the Interim Points into the shipment to the consolidation pool.\nIf an order goes though a cross-dock, Interim Points are inserted in the following way:\nIf the cross-dock is inbound biased, insert the Interim Points into the shipment that goes to the cross-dock\nOtherwise insert the Interim Points into the shipment from cross-dock. "
        },
        "RATE_SERVICE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_SERVICE_PROFILE",
          "info": "The GID for the rate service profile. The rate service profile provides a way to group rate services that have some similar attributes. A Rate Service determines the time required to transport goods from one location to another. "
        },
        "PAYMENT_METHOD_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYMENT_METHOD_CODE",
          "info": "Payment method on the leg which will be copied to the corresponding shipment. "
        },
        "VIA_SRC_LOC_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE",
          "info": "The list of valid source VIA locations to evaluate in rating and routing. "
        },
        "VIA_DEST_LOC_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE",
          "info": "The list of valid destination VIA locations to evaluate in rating and routing. "
        },
        "VIA_SRC_LOC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Used when only a single VIA source location is valid. Will be used in rating and routing. "
        },
        "VIA_DEST_LOC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Used when only a single VIA destination location is valid. Will be used in rating and routing. "
        },
        "PLAN_TO_OPERATIONAL_LOC": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, shipments for this leg should be planned to a specific operational location such as a terminal at a port. "
        },
        "IS_TEMPORARY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "N/A "
        },
        "TRANS_ARB_SEARCH_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "values": [
            "SOURCE",
            "DEST",
            "SOURCE",
            "DEST"
          ],
          "info": "Describes when to search for trans-shipment arbitraries. "
        },
        "IS_USE_CONSOL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "The Use Consol check box is used to indicate that this itinerary leg can be used as a candidate for building a consol shipment for a charter voyage or flight. "
        },
        "CPCTY_OVERRIDE_LEAD_TIME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "A capacity override allows you to model specific weight/volume restrictions by transport mode or equipment that can be assigned to any itinerary leg to control whether a shipment can be planned for that leg. For example, some countries or regions have specific capacity restrictions such as bridges that have maximum weight limits. By creating a capacity override and assigning it to a specific itinerary leg, Oracle Transportation Management will override the equipment capacity. For example, if an equipment has a capacity of 30000 pounds, but the capacity override says 27000 pounds, then Oracle Transportation Management will not plan more than 27000 pounds in the equipment. Weight and volume are restricted by service provider as well as equipment group and transport mode. Note: The lower of either the Equipment or the Equipment Capacity Override will be used and the Equipment Capacity Override is used only to reduce the equipment capacity that can be used. "
        },
        "CPCTY_OVERRIDE_LEAD_T_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Days, hours or minutes. "
        },
        "CPCTY_OVERRIDE_LEAD_T_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Equipment capacity lead time in base unit of measure. "
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
        "LEG_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
            "ITINERARY LEG",
            "NETWORK LEG"
          ],
          "info": "N/A "
        },
        "ROUTING_NETWORK_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROUTING_NETWORK",
          "info": "The GID for the related network. "
        },
        "SOURCE_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "The GID for the Source Region. An order using the routing network must enter the network on a leg that has a source region, and exit the network on a leg that has a destination region. Thus, a routing network will be unusable unless it has at least one network leg with a source region, and at least one network leg with a destination region. "
        },
        "DEST_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "The GID for the Destination Region. An order using the routing network must enter the network on a leg that has a source region, and exit the network on a leg that has a destination region. Thus, a routing network will be unusable unless it has at least one network leg with a source region, and at least one network leg with a destination region. "
        },
        "LEG_CONSOLIDATION_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LEG_CONSOLIDATION_GROUP",
          "info": "The GID for the leg consolidation group. The Leg Consolidation Group makes shipment consolidation easier to control. It allows for order movement grouping in order movement planning to facilitate shipment timing and consolidation. Leg consolidation groups are available for the following: Network Leg, Itinerary Leg, Order Release, Order Movement, and Order Release Leg Constraint. Planning will not set or modify the leg consolidation group values for these entities. These are just inputs for planning. For order movement creation, planning populates the leg consolidation group on order movements.\nNote: You still need the ALLOW DIFF ORIG LEG GID OMS CONSOLIDATE parameter set to true to allow orders on different legs to consolidate onto the same shipment. "
        },
        "DEPOT_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DEPOT_PROFILE",
          "info": "The GID for the depot profile. The depot profile defines the lane and Source and/or Destination Depot Locations that are considered during planning for service providers that start and end at depot locations. "
        },
        "ALLOW_CROSS_CONSOLIDATION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Allow Cross Consolidation check box indicates whether to allow cross-consolidation out of the source location of the leg. This is only used when the destination of the leg is a region and the source of the leg is a location. The purpose of this check box is to model how some deconsolidation pools work, where orders going out of the pool on the same shipment must have gone into the pool in the same shipment. That is, orders coming into the pool on different shipments may not cross-consolidate onto the same out-of-pool shipment. This behavior is enforced when this check box is off. It is on by default. "
        },
        "ALLOCATION_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ALLOCATION_GROUP",
          "info": "The GID for the allocation group. The Allocation Group provides a direct association between the leg and the allocation. This allocation group is used to match the allocation group on the commitment allocation record if the parameter Allocation Group Strategy is set to '1. Use Allocation Group on Leg'."
        }
      },
      "fk_tables": [
        "ITINERARY_DETAIL",
        "LEG_CAPACITY_OVERRIDE",
        "LEG_FLEX_COMMOD_PLIST",
        "LEG_INTERIM_POINT",
        "LEG_INVOLVED_PARTY",
        "LEG_SCHEDULE",
        "ORDER_MOVEMENT",
        "ROUTING_CONSTRAINT",
        "ROUTING_NETWORK_DETAIL",
        "SHIPMENT"
      ]
    }
  }
};

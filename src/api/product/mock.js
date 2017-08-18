export function getSessionsProductById(productId, seasonId) {
  return new Promise(resolve =>
    setTimeout(
      () =>
        resolve({
          type: 'CLASSIC',
          activityDuration: 600,
          barCode: null,
          bookingManagement: 'AUTOMATIC',
          bookingManagementManualLimit: 0,
          canBePrivatized: false,
          capacityManagement: 'CAPACITY',
          color: '#38761d',
          delayBeforeBooking: 604800,
          delayBetweenBooking: 604800,
          description:
            '<p>Magniables et rapides, ces karts vous etonneront avec leurs parties reglables au niveau du si&egrave;ge, volant et p&eacute;dales.</p>',
          directSales: true,
          displayedStartingPrice: 15,
          images: null,
          information: null,
          marketplaceSales: true,
          maxParticipants: 10,
          minBookings: 0,
          minParticipants: 1,
          minParticipantsToPrivatize: 30,
          name: 'Mini Kart',
          participantPreciseInformationRequired: null,
          partnerSales: false,
          pricingType: null,
          primaryImage: null,
          reference: '582852981',
          reservationShowAvailabilityLeft: false,
          scheduleType: 'OPEN_BILLET',
          sellingTarget: 'PROFESSIONAL',
          showAvailability: null,
          status: 'PUBLISHED',
          subscribeNow: null,
          summary:
            "Le Mini Kart  : un 120cc 4 temps accessible à partir de 7 ans et 1m30 jusqu’à 14 ans (selon gabarit) est le moyen de s'initier à la pratique de ce loisir/sport en toute simplicité et en parfaite sécurité.",
          validityDuration: 0,
          webSales: false,
          creationDate: null,
          id: 1985,
          _embedded: {
            unit: {
              type: 'SESSION',
              name: 'Session 10 minutes',
              plural: 'Sessions 10 minutes',
              sliceQuantity: 1,
              id: 4226,
              _links: {
                merchant: {
                  href:
                    'https://staging-open-api.myeasyloisirs.com/v1/companies/582'
                },
                self: {
                  href:
                    'https://staging-open-api.myeasyloisirs.com/v1/units/4226'
                }
              }
            },
            tax: {
              active: true,
              name: 'TVA 20%',
              rate: 20.0,
              id: 2,
              _links: {
                self: {
                  href: 'https://staging-open-api.myeasyloisirs.com/v1/taxes/2'
                }
              }
            },
            prices: [
              {
                type: 'SELLING',
                numberOfSessions: 1,
                position: 0,
                value: 12.5,
                id: 1757,
                _embedded: {
                  season: {
                    name: 'Basse',
                    id: 0,
                    _links: {
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                      }
                    }
                  }
                },
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/1985'
                  },
                  self: {
                    href: 'https://staging-open-api.myeasyloisirs.com/v1/1757'
                  }
                }
              },
              {
                type: 'SELLING',
                numberOfSessions: 2,
                position: 0,
                value: 23.333333,
                id: 1758,
                _embedded: {
                  season: {
                    name: 'Basse',
                    id: 0,
                    _links: {
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                      }
                    }
                  }
                },
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/1985'
                  },
                  self: {
                    href: 'https://staging-open-api.myeasyloisirs.com/v1/1758'
                  }
                }
              },
              {
                type: 'SELLING',
                numberOfSessions: 12,
                position: 0,
                value: 120.833333,
                id: 1759,
                _embedded: {
                  season: {
                    name: 'Basse',
                    id: 0,
                    _links: {
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                      }
                    }
                  }
                },
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/1985'
                  },
                  self: {
                    href: 'https://staging-open-api.myeasyloisirs.com/v1/1759'
                  }
                }
              },
              {
                type: 'SELLING',
                numberOfSessions: 1,
                position: 0,
                value: 12.5,
                id: 1761,
                _embedded: {
                  season: {
                    name: 'Moyenne',
                    id: 1,
                    _links: {
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/seasons/1'
                      }
                    }
                  }
                },
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/1985'
                  },
                  self: {
                    href: 'https://staging-open-api.myeasyloisirs.com/v1/1761'
                  }
                }
              },
              {
                type: 'SELLING',
                numberOfSessions: 2,
                position: 0,
                value: 23.333333,
                id: 1762,
                _embedded: {
                  season: {
                    name: 'Moyenne',
                    id: 1,
                    _links: {
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/seasons/1'
                      }
                    }
                  }
                },
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/1985'
                  },
                  self: {
                    href: 'https://staging-open-api.myeasyloisirs.com/v1/1762'
                  }
                }
              },
              {
                type: 'SELLING',
                numberOfSessions: 12,
                position: 0,
                value: 120.833333,
                id: 1763,
                _embedded: {
                  season: {
                    name: 'Moyenne',
                    id: 1,
                    _links: {
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/seasons/1'
                      }
                    }
                  }
                },
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/1985'
                  },
                  self: {
                    href: 'https://staging-open-api.myeasyloisirs.com/v1/1763'
                  }
                }
              },
              {
                type: 'SELLING',
                numberOfSessions: 1,
                position: 0,
                value: 12.5,
                id: 1765,
                _embedded: {
                  season: {
                    name: 'Haute',
                    id: 2,
                    _links: {
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/seasons/2'
                      }
                    }
                  }
                },
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/1985'
                  },
                  self: {
                    href: 'https://staging-open-api.myeasyloisirs.com/v1/1765'
                  }
                }
              },
              {
                type: 'SELLING',
                numberOfSessions: 2,
                position: 0,
                value: 23.333333,
                id: 1766,
                _embedded: {
                  season: {
                    name: 'Haute',
                    id: 2,
                    _links: {
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/seasons/2'
                      }
                    }
                  }
                },
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/1985'
                  },
                  self: {
                    href: 'https://staging-open-api.myeasyloisirs.com/v1/1766'
                  }
                }
              },
              {
                type: 'SELLING',
                numberOfSessions: 12,
                position: 0,
                value: 120.833333,
                id: 1767,
                _embedded: {
                  season: {
                    name: 'Haute',
                    id: 2,
                    _links: {
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/seasons/2'
                      }
                    }
                  }
                },
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/1985'
                  },
                  self: {
                    href: 'https://staging-open-api.myeasyloisirs.com/v1/1767'
                  }
                }
              },
              {
                type: 'SELLING',
                numberOfSessions: 1,
                position: 0,
                value: 12.5,
                id: 1769,
                _embedded: {
                  season: {
                    name: 'Très haute',
                    id: 3,
                    _links: {
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/seasons/3'
                      }
                    }
                  }
                },
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/1985'
                  },
                  self: {
                    href: 'https://staging-open-api.myeasyloisirs.com/v1/1769'
                  }
                }
              },
              {
                type: 'SELLING',
                numberOfSessions: 2,
                position: 0,
                value: 23.333333,
                id: 1770,
                _embedded: {
                  season: {
                    name: 'Très haute',
                    id: 3,
                    _links: {
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/seasons/3'
                      }
                    }
                  }
                },
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/1985'
                  },
                  self: {
                    href: 'https://staging-open-api.myeasyloisirs.com/v1/1770'
                  }
                }
              },
              {
                type: 'SELLING',
                numberOfSessions: 12,
                position: 0,
                value: 120.833333,
                id: 1771,
                _embedded: {
                  season: {
                    name: 'Très haute',
                    id: 3,
                    _links: {
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/seasons/3'
                      }
                    }
                  }
                },
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/1985'
                  },
                  self: {
                    href: 'https://staging-open-api.myeasyloisirs.com/v1/1771'
                  }
                }
              },
              {
                type: 'DEGRESSIVE',
                mainUnit: true,
                maxTargetUnitQuantity: 2,
                minTargetUnitQuantity: 2,
                position: 0,
                value: 23.333333,
                id: 6696,
                _embedded: {
                  targetUnit: {
                    type: 'SESSION',
                    name: 'Session 10 minutes',
                    plural: 'Sessions 10 minutes',
                    sliceQuantity: 1,
                    id: 4226,
                    _links: {
                      merchant: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/companies/582'
                      },
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/units/4226'
                      }
                    }
                  },
                  season: {
                    name: 'Basse',
                    id: 0,
                    _links: {
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                      }
                    }
                  }
                },
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/1985'
                  },
                  self: {
                    href: 'https://staging-open-api.myeasyloisirs.com/v1/6696'
                  }
                }
              },
              {
                type: 'DEGRESSIVE',
                mainUnit: true,
                maxTargetUnitQuantity: 2,
                minTargetUnitQuantity: 2,
                position: 0,
                value: 23.333333,
                id: 6697,
                _embedded: {
                  targetUnit: {
                    type: 'SESSION',
                    name: 'Session 10 minutes',
                    plural: 'Sessions 10 minutes',
                    sliceQuantity: 1,
                    id: 4226,
                    _links: {
                      merchant: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/companies/582'
                      },
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/units/4226'
                      }
                    }
                  },
                  season: {
                    name: 'Moyenne',
                    id: 1,
                    _links: {
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/seasons/1'
                      }
                    }
                  }
                },
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/1985'
                  },
                  self: {
                    href: 'https://staging-open-api.myeasyloisirs.com/v1/6697'
                  }
                }
              },
              {
                type: 'DEGRESSIVE',
                mainUnit: true,
                maxTargetUnitQuantity: 2,
                minTargetUnitQuantity: 2,
                position: 0,
                value: 23.333333,
                id: 6698,
                _embedded: {
                  targetUnit: {
                    type: 'SESSION',
                    name: 'Session 10 minutes',
                    plural: 'Sessions 10 minutes',
                    sliceQuantity: 1,
                    id: 4226,
                    _links: {
                      merchant: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/companies/582'
                      },
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/units/4226'
                      }
                    }
                  },
                  season: {
                    name: 'Haute',
                    id: 2,
                    _links: {
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/seasons/2'
                      }
                    }
                  }
                },
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/1985'
                  },
                  self: {
                    href: 'https://staging-open-api.myeasyloisirs.com/v1/6698'
                  }
                }
              },
              {
                type: 'DEGRESSIVE',
                mainUnit: true,
                maxTargetUnitQuantity: 2,
                minTargetUnitQuantity: 2,
                position: 0,
                value: 23.333333,
                id: 6699,
                _embedded: {
                  targetUnit: {
                    type: 'SESSION',
                    name: 'Session 10 minutes',
                    plural: 'Sessions 10 minutes',
                    sliceQuantity: 1,
                    id: 4226,
                    _links: {
                      merchant: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/companies/582'
                      },
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/units/4226'
                      }
                    }
                  },
                  season: {
                    name: 'Très haute',
                    id: 3,
                    _links: {
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/seasons/3'
                      }
                    }
                  }
                },
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/1985'
                  },
                  self: {
                    href: 'https://staging-open-api.myeasyloisirs.com/v1/6699'
                  }
                }
              },
              {
                type: 'DEGRESSIVE',
                mainUnit: true,
                maxTargetUnitQuantity: 3,
                minTargetUnitQuantity: 3,
                position: 0,
                value: 34.166667,
                id: 6700,
                _embedded: {
                  targetUnit: {
                    type: 'SESSION',
                    name: 'Session 10 minutes',
                    plural: 'Sessions 10 minutes',
                    sliceQuantity: 1,
                    id: 4226,
                    _links: {
                      merchant: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/companies/582'
                      },
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/units/4226'
                      }
                    }
                  },
                  season: {
                    name: 'Basse',
                    id: 0,
                    _links: {
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                      }
                    }
                  }
                },
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/1985'
                  },
                  self: {
                    href: 'https://staging-open-api.myeasyloisirs.com/v1/6700'
                  }
                }
              },
              {
                type: 'DEGRESSIVE',
                mainUnit: true,
                maxTargetUnitQuantity: 3,
                minTargetUnitQuantity: 3,
                position: 0,
                value: 34.166667,
                id: 6701,
                _embedded: {
                  targetUnit: {
                    type: 'SESSION',
                    name: 'Session 10 minutes',
                    plural: 'Sessions 10 minutes',
                    sliceQuantity: 1,
                    id: 4226,
                    _links: {
                      merchant: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/companies/582'
                      },
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/units/4226'
                      }
                    }
                  },
                  season: {
                    name: 'Moyenne',
                    id: 1,
                    _links: {
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/seasons/1'
                      }
                    }
                  }
                },
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/1985'
                  },
                  self: {
                    href: 'https://staging-open-api.myeasyloisirs.com/v1/6701'
                  }
                }
              },
              {
                type: 'DEGRESSIVE',
                mainUnit: true,
                maxTargetUnitQuantity: 3,
                minTargetUnitQuantity: 3,
                position: 0,
                value: 34.166667,
                id: 6702,
                _embedded: {
                  targetUnit: {
                    type: 'SESSION',
                    name: 'Session 10 minutes',
                    plural: 'Sessions 10 minutes',
                    sliceQuantity: 1,
                    id: 4226,
                    _links: {
                      merchant: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/companies/582'
                      },
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/units/4226'
                      }
                    }
                  },
                  season: {
                    name: 'Haute',
                    id: 2,
                    _links: {
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/seasons/2'
                      }
                    }
                  }
                },
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/1985'
                  },
                  self: {
                    href: 'https://staging-open-api.myeasyloisirs.com/v1/6702'
                  }
                }
              },
              {
                type: 'DEGRESSIVE',
                mainUnit: true,
                maxTargetUnitQuantity: 3,
                minTargetUnitQuantity: 3,
                position: 0,
                value: 34.166667,
                id: 6703,
                _embedded: {
                  targetUnit: {
                    type: 'SESSION',
                    name: 'Session 10 minutes',
                    plural: 'Sessions 10 minutes',
                    sliceQuantity: 1,
                    id: 4226,
                    _links: {
                      merchant: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/companies/582'
                      },
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/units/4226'
                      }
                    }
                  },
                  season: {
                    name: 'Très haute',
                    id: 3,
                    _links: {
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/seasons/3'
                      }
                    }
                  }
                },
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/1985'
                  },
                  self: {
                    href: 'https://staging-open-api.myeasyloisirs.com/v1/6703'
                  }
                }
              }
            ],
            tags: []
          },
          _links: {
            subCategory: {
              href:
                'https://staging-open-api.myeasyloisirs.com/v1/product_sub_categories/54'
            },
            address: {
              href:
                'https://staging-open-api.myeasyloisirs.com/v1/addresses/1069'
            },
            merchant: {
              href:
                'https://staging-open-api.myeasyloisirs.com/v1/companies/582'
            },
            self: {
              href:
                'https://staging-open-api.myeasyloisirs.com/v1/products/1985'
            },
            category: {
              href:
                'https://staging-open-api.myeasyloisirs.com/v1/product_categories/3'
            }
          }
        }),
      2000
    )
  ).then(product => setProductUnits(product));
}

/**
 *
 */
function setProductUnits(product) {
  if (product.type === 'CLASSIC') {
    if (
      product._embedded.unit.type === 'MAIN' ||
      product._embedded.unit.type === 'FORFAIT'
    ) {
      // get main/forfait unit selling
      product._embedded.unit.prices = product._embedded.prices.filter(
        price => price.type === 'SELLING'
      );
      // get degressive prices for main unit
      product._embedded.unit.prices = product._embedded.unit.prices.concat(
        product._embedded.prices.filter(
          price =>
            price.type === 'DEGRESSIVE' &&
            price._embedded.targetUnit.id === product._embedded.unit.id
        )
      );
      product.units = [product._embedded.unit];
    }
    if (product._embedded.unit.type === 'MAIN') {
      // get all the specific prices
      let specificPrices = product._embedded.prices.filter(
        price => price.type === 'SPECIFIC'
      );
      // get all the target units
      let targetUnits = specificPrices
        .filter(
          (price, index, prices) =>
            prices
              .map(price => price._embedded.targetUnit.id)
              .indexOf(price._embedded.targetUnit.id) === index
        )
        .map(price => price._embedded.targetUnit);
      // get all the target units specific prices
      targetUnits = targetUnits.map(targetUnit => {
        targetUnit.prices = specificPrices.filter(
          price => price._embedded.targetUnit.id === targetUnit.id
        );
        return targetUnit;
      });
      // get all the target units degressive prices
      targetUnits = targetUnits.map(targetUnit => {
        targetUnit.prices = targetUnit.prices.concat(
          product._embedded.prices.filter(
            price =>
              price.type === 'DEGRESSIVE' &&
              price._embedded.targetUnit.id === targetUnit.id
          )
        );
        return targetUnit;
      });
      product.units = product.units.concat(targetUnits);
    } else if (product._embedded.unit.type === 'SESSION') {
      // get session unit selling prices
      product._embedded.unit.prices = product._embedded.prices
        .filter(price => price.type === 'SELLING')
        .sort((p1, p2) => p1.numberOfSessions - p2.numberOfSessions);
    }
  } else if (product.type === 'EXTRA') {
    product.units = [{ price: product._embedded.prices[0] }];
  }

  // if (product._embedded.unit.type === 'MAIN') {
  //   let units = [product._embedded.unit];
  //   // get all the specific units
  //   product.units = units.concat(
  //     product._embedded.prices
  //       .filter(price => price.type === 'SPECIFIC')
  //       .map(price => price._embedded.targetUnit)
  //   );
  // } else if (product._embedded.unit.type === 'SESSION') {
  //   // get every unique number of sessions for session unit
  //   product.unit = product._embedded.unit;
  //   product.unit.sessionQuantities = [].concat(
  //     product._embedded.prices
  //       .filter(price => price.type === 'SELLING')
  //       .map(price => price.numberOfSessions)
  //       .filter(
  //         (numberOfSessions, index, sessionQuantities) =>
  //           sessionQuantities.indexOf(numberOfSessions) === index
  //       )
  //       .sort((p1, p2) => p1.numberOfSessions - p2.numberOfSessions)
  //   );
  // }
  return product;
}

export function getProductWithExtras() {
  return new Promise(resolve =>
    setTimeout(
      () =>
        resolve({
          type: 'CLASSIC',
          activityDuration: 7200,
          barCode: null,
          bookingManagement: 'MANUAL',
          bookingManagementManualLimit: 0,
          canBePrivatized: true,
          capacityManagement: 'CAPACITY',
          color: '#ff00ff',
          delayBeforeBooking: 3600,
          delayBetweenBooking: 3600,
          description:
            "<p>Des visites guid&eacute;es dans le Paris m&eacute;connu et insolite. Rendez-vous avec l'histoire, les l&eacute;gendes et les anecdotes de Paris dans une ambiance conviviale.<br />-----------------------<br />OFFRE SP&Eacute;CIALE VISITES GUID&Eacute;ES MOIS DE MAI : POUR 1 PLACE ACHET&Eacute;E, LA 2EME &Agrave; 50% !</p>",
          directSales: false,
          displayedStartingPrice: 12,
          images: null,
          information:
            "Des visites guidées dans le Paris méconnu et insolite. Rendez-vous avec l'histoire, les légendes et les anecdotes de Paris dans une ambiance conviviale.\n-----------------------\nOFFRE SPÉCIALE VISITES GUIDÉES MOIS DE MAI : POUR 1 PLACE ACHETÉE, LA 2EME À 50% !",
          marketplaceSales: false,
          maxParticipants: 10,
          minBookings: 0,
          minParticipants: 1,
          minParticipantsToPrivatize: 2,
          name: 'Promenade 2 heures',
          participantPreciseInformationRequired: null,
          partnerSales: false,
          pricingType: null,
          primaryImage: null,
          reference: '271701690',
          reservationShowAvailabilityLeft: false,
          scheduleType: 'EXACT_DATES_AND_TIMES',
          sellingTarget: 'PROFESSIONAL',
          showAvailability: null,
          status: 'PUBLISHED',
          subscribeNow: null,
          summary:
            "Des visites guidées dans le Paris méconnu et insolite. Rendez-vous avec l'histoire, les légendes et les anecdotes de Paris dans une ambiance conviviale.\n-----------------------\nOFFRE SPÉCIALE VISITES GUIDÉES MOIS DE MAI : POUR 1 PLACE ACHETÉE, LA 2EME À 50% !",
          validityDuration: 0,
          webSales: false,
          creationDate: '2017-04-13T12:13:37+02:00',
          id: 4581,
          _embedded: {
            unit: {
              type: 'MAIN',
              name: 'adulte',
              plural: null,
              sliceQuantity: 1,
              id: 2309,
              _links: {
                merchant: {
                  href:
                    'https://staging-open-api.myeasyloisirs.com/v1/companies/271'
                },
                self: {
                  href:
                    'https://staging-open-api.myeasyloisirs.com/v1/units/2309'
                }
              }
            },
            extraProducts: [
              {
                type: 'EXTRA',
                activityDuration: null,
                address: null,
                barCode: null,
                bookingManagement: null,
                bookingManagementManualLimit: 0,
                canBePrivatized: null,
                capacityManagement: 'CAPACITY',
                category: null,
                color: null,
                delayBeforeBooking: null,
                delayBetweenBooking: null,
                description: 'BLABALB',
                directSales: false,
                displayedStartingPrice: 5,
                images: null,
                information: null,
                marketplaceSales: false,
                maxParticipants: 0,
                minBookings: 0,
                minParticipants: 0,
                minParticipantsToPrivatize: 0,
                name: 'COUPE CHAMPAGNE',
                participantPreciseInformationRequired: null,
                partnerSales: false,
                prices: null,
                pricingType: null,
                primaryImage: null,
                reference: null,
                reservationShowAvailabilityLeft: null,
                scheduleType: null,
                sellingTarget: 'PROFESSIONAL',
                showAvailability: null,
                status: 'DRAFT',
                subCategory: null,
                subscribeNow: null,
                summary: 'PHOR',
                unit: null,
                validityDuration: 0,
                webSales: false,
                creationDate: '2017-04-13T12:13:37+02:00',
                id: 5204,
                _embedded: {
                  products: [],
                  tags: []
                },
                _links: {
                  merchant: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/companies/271'
                  },
                  self: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/5204'
                  },
                  tax: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/taxes/8'
                  }
                }
              }
            ],
            tax: {
              active: true,
              name: 'TVA 20%',
              rate: 20.0,
              id: 2,
              _links: {
                self: {
                  href: 'https://staging-open-api.myeasyloisirs.com/v1/taxes/2'
                }
              }
            },
            prices: [
              {
                type: 'SPECIFIC',
                mandatoryMainUnitQuantity: 1,
                otherValue: null,
                targetUnitQuantityMode: 2,
                maxTargetUnitQuantity: 16,
                minTargetUnitQuantity: 6,
                position: 0,
                value: 7.5,
                id: 17296,
                _embedded: {
                  targetUnit: {
                    type: 'TARGET',
                    name: 'Enfant',
                    plural: null,
                    sliceQuantity: 1,
                    id: 509,
                    _links: {
                      merchant: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/companies/271'
                      },
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/units/509'
                      }
                    }
                  },
                  season: {
                    name: 'Basse',
                    id: 0,
                    _links: {
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                      }
                    }
                  }
                },
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/4581'
                  },
                  self: {
                    href: 'https://staging-open-api.myeasyloisirs.com/v1/17296'
                  }
                }
              },
              {
                type: 'SELLING',
                numberOfSessions: 1,
                position: 0,
                value: 10.0,
                id: 17297,
                _embedded: {
                  season: {
                    name: 'Basse',
                    id: 0,
                    _links: {
                      self: {
                        href:
                          'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                      }
                    }
                  }
                },
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/4581'
                  },
                  self: {
                    href: 'https://staging-open-api.myeasyloisirs.com/v1/17297'
                  }
                }
              }
            ],
            tags: []
          },
          _links: {
            subCategory: {
              href:
                'https://staging-open-api.myeasyloisirs.com/v1/product_sub_categories/94'
            },
            address: {
              href:
                'https://staging-open-api.myeasyloisirs.com/v1/addresses/1370'
            },
            merchant: {
              href:
                'https://staging-open-api.myeasyloisirs.com/v1/companies/271'
            },
            self: {
              href:
                'https://staging-open-api.myeasyloisirs.com/v1/products/4581'
            },
            category: {
              href:
                'https://staging-open-api.myeasyloisirs.com/v1/product_categories/6'
            }
          }
        }),
      2000
    )
  );
}
